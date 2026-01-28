const dropArea = document.getElementById('drop-area')
const fileInput = document.getElementById('file-input')
const compressBtn = document.getElementById('compress-btn')
const downloadLink = document.getElementById('download-link')
const statusDiv = document.getElementById('status')
const progressBar = document.getElementById('progress')
const fileInfoDiv = document.getElementById('file-info')
const compressionInfoDiv = document.getElementById('compression-info')
const timeInfoDiv = document.getElementById('time-info')
const extremeCompression = document.getElementById('extreme-compression')

let startTime, selectedFile

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
})

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

const highlight = () => dropArea.classList.add('highlight')

const unhighlight = () => dropArea.classList.remove('highlight')

const handleDrop = e => {
  const dt = e.dataTransfer
  const files = dt.files
  handleFiles(files)
}

;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
})

dropArea.addEventListener('drop', handleDrop, false)

fileInput.addEventListener('change', function (e) {
  handleFiles(this.files)
})

function handleFiles (files) {
  if (files.length > 0) {
    selectedFile = files[0]
    statusDiv.textContent = `选择文件: ${selectedFile.name}`
    fileInfoDiv.textContent = `原始文件大小: ${formatFileSize(selectedFile.size)}`
    compressBtn.style.display = 'inline-block'
    downloadLink.style.display = 'none'
    compressionInfoDiv.textContent = ''
    timeInfoDiv.textContent = ''
    progressBar.style.width = '0%'
  }
}

compressBtn.addEventListener('click', compressVideo)

async function compressVideo () {
  if (!selectedFile) return alert('请先选择一个视频文件。')
  updateProgress(0)
  const { createFFmpeg, fetchFile } = FFmpeg
  const ffmpeg = createFFmpeg({
    progress: ({ ratio }) => {
      updateProgress(ratio * 100)
      updateTimeInfo(ratio)
    }
  })
  await ffmpeg.load()

  updateStatus('正在压缩中...')
  ffmpeg.FS('writeFile', selectedFile.name, await fetchFile(selectedFile))

  let outputFileName = selectedFile.name.split('.')
  outputFileName.pop()
  outputFileName = `${outputFileName.join('.')}_compressed.mp4`
  startTime = Date.now()
  updateTimeInfo(0)
  if (extremeCompression.checked) {
    await ffmpeg.run('-i', selectedFile.name, '-c:v', 'libx264', '-tag:v', 'avc1', '-movflags', 'faststart', '-crf', '30', '-preset', 'superfast', '-ac', '1', '-ar', '16000', '-b:a', '24000', outputFileName)
  } else {
    await ffmpeg.run('-i', selectedFile.name, '-c:v', 'libx264', '-tag:v', 'avc1', '-movflags', 'faststart', '-crf', '30', '-preset', 'superfast', outputFileName)
  }

  updateStatus('压缩完成！')

  const data = ffmpeg.FS('readFile', outputFileName)
  const compressedVideo = new Blob([data.buffer], { type: 'video/mp4' })
  const url = URL.createObjectURL(compressedVideo)

  downloadLink.href = url
  downloadLink.download = outputFileName
  downloadLink.style.display = 'inline-block'

  compressionInfoDiv.textContent = `压缩后的文件大小: ${formatFileSize(compressedVideo.size)}`
  const compressionRatio = ((1 - (compressedVideo.size / selectedFile.size)) * 100).toFixed(2)
  compressionInfoDiv.textContent += ` 压缩率: ${compressionRatio}%`
  timeInfoDiv.textContent = `压缩耗时: ${formatTime((Date.now() - startTime) / 1000)}`
}

function updateStatus (message) {
  statusDiv.textContent = message
}

function updateProgress (progress) {
  progressBar.style.width = `${progress}%`
}

function formatTime (seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}

function updateTimeInfo (ratio) {
  if (ratio === 0) {
    timeInfoDiv.textContent = '预计时间: 计算中...'
    return
  }
  const elapsedTime = (Date.now() - startTime) / 1000
  const estimatedTotalTime = elapsedTime / ratio
  const remainingTime = estimatedTotalTime - elapsedTime
  timeInfoDiv.textContent = `预计剩余时间: ${formatTime(remainingTime)}`
}

function formatFileSize (bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
