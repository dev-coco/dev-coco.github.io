let audioStream
let recorder
let isRecording = false
let analyser
let audioBlob

// 可视化
const visualizer = document.getElementById('visualizer')
// 录制按钮
const recordButton = document.getElementById('recordButton')
// 停止按钮
const stopButton = document.getElementById('stopButton')
// 下载按钮
const downloadButton = document.getElementById('downloadButton')
// 音频元素
const audioElement = document.getElementById('audioElement')

// 监听事件
recordButton.addEventListener('click', startRecording)
stopButton.addEventListener('click', stopRecording)
downloadButton.addEventListener('click', downloadAudio)

// 防止误刷新丢失内容
let used = false
window.onbeforeunload = e => {
  if (used) return ''
}

// 开始录制
function startRecording () {
  // 隐藏下载按钮
  downloadButton.style.display = 'none'
  // 隐藏录制按钮
  recordButton.style.display = 'none'
  // 显示停止按钮
  stopButton.style.display = ''
  used = true
  const constraints = { audio: true, video: false }

  navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()

    audioStream = stream
    analyser = audioContext.createAnalyser()

    const input = audioContext.createMediaStreamSource(stream)
    input.connect(analyser)
    isRecording = true

    recorder = new WebAudioRecorder(input, {
      workerDir: 'js/', // must end with slash
      encoding: 'mp3',
      numChannels: 2
    })

    recorder.onComplete = (recorder, blob) => {
      // 加载音频条
      audioBlob = blob
      audioElement.src = URL.createObjectURL(blob)
      audioElement.style.display = 'block'
    }

    recorder.setOptions({
      // timeLimit: 120,
      encodeAfterRecord: true,
      mp3: { bitRate: 64 }
    })
    recorder.startRecording()

    visualize()
  }).catch(error => {
    console.log(error)
    recordButton.disabled = false
    stopButton.disabled = true
  })

  recordButton.disabled = true
  stopButton.disabled = false
}

// 停止录制
function stopRecording () {
  // 隐藏停止按钮
  stopButton.style.display = 'none'
  // 显示下载按钮
  downloadButton.style.display = ''
  // 允许点击下载按钮
  downloadButton.disabled = false
  // 显示录制按钮
  recordButton.style.display = ''
  // 禁止点击停止按钮
  stopButton.disabled = true
  // 允许点击录制按钮
  recordButton.disabled = false
  audioStream.getAudioTracks()[0].stop()
  isRecording = false
  recorder.finishRecording()
}

// 下载音频
function downloadAudio () {
  const url = URL.createObjectURL(audioBlob)
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style = 'display: none'
  a.href = url
  a.download = new Date().toISOString() + '.mp3'
  a.click()
  window.URL.revokeObjectURL(url)
  used = false
}

// 可视化
function visualize () {
  visualizer.width = visualizer.offsetWidth
  visualizer.height = visualizer.offsetHeight

  const WIDTH = visualizer.width
  const HEIGHT = visualizer.height
  const canvasCtx = visualizer.getContext('2d')

  const gradient = canvasCtx.createLinearGradient(0, 0, 0, 300)
  gradient.addColorStop(1, '#33136c')
  gradient.addColorStop(0.5, '#c4217c')
  gradient.addColorStop(1, '#d04399')

  analyser.fftSize = 256
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT)

  function draw () {
    const drawVisual = requestAnimationFrame(draw)
    analyser.getByteFrequencyData(dataArray)

    canvasCtx.fillStyle = '#fff'
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)

    const barWidth = (WIDTH / bufferLength) * 2.5
    let barHeight
    let x = 0

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] / 2
      canvasCtx.fillStyle = gradient
      canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight)
      x += barWidth + 2
    }
    if (!isRecording) cancelAnimationFrame(drawVisual)
  }
  draw()
}
