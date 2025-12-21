// HTML转义
function htmlEscape (str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/"/g, '&quot;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/\n/g, '&#10;')
  return str
}

// 搜索背景逻辑
const searchInput = document.getElementById('bgSearch')
if (searchInput) {
  searchInput.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase().trim()
    const allImages = document.querySelectorAll('.offcanvas-body .image-radio')
    const sections = document.querySelectorAll('.offcanvas-body h6')

    allImages.forEach(radio => {
      const img = radio.querySelector('img')
      const desc = img.getAttribute('aria-description') || ''
      if (desc.toLowerCase().includes(searchTerm)) {
        radio.style.display = ''
      } else {
        radio.style.display = 'none'
      }
    })

    sections.forEach(header => {
      const grid = header.nextElementSibling
      if (grid && grid.classList.contains('drawer-grid')) {
        const hasVisibleImages = Array.from(grid.children).some(child => child.style.display !== 'none')
        header.style.display = hasVisibleImages ? '' : 'none'
      }
    })
  })
}

// ==================== 拖入图片 ====================
const dragArea = document.getElementById('dragArea')
const fileInput = document.getElementById('fileInput')
const preview = document.getElementById('preview')

// 图片数量限制
const MAX_IMAGES = 4

let selectedUrls = []
let previewIndex = 0

// 清空已选择的图片
function clearSelectedImages () {
  // 释放图片链接避免内存泄漏
  selectedUrls.forEach(u => URL.revokeObjectURL(u))
  selectedUrls = []
  blobs = []
  previewIndex = 0
  preview.innerHTML = ''
}

// 预加载图片
async function preloadAll () {
  const tasks = selectedUrls.map(url => {
    const img = new Image()
    img.src = url
    return img.decode ? img.decode().catch(() => {}) : new Promise(r => (img.onload = r))
  })
  await Promise.all(tasks)
}

// 加载彩色背景
async function loadBackgroundColor () {
  const el = document.getElementById('backrgoundList')
  const json = await fetch('color.json').then(respoonse => respoonse.json())
  let html = ''
  for (const [category, items] of Object.entries(json)) {
    console.log(category)
    html += `<h6 class="border-bottom pb-2 mb-3 mt-4 bg-white pt-2" data-localize="${category}">${localize[category]}</h6><div class="drawer-grid">`

    for (const [id, description] of Object.entries(items)) {
      html += `<label class="image-radio">
          <input type="radio" name="image" value="${id}">
          <img loading="lazy" aria-description="${description}" src="/images/Background-Color/${id}-2x.png"
            class="img-fluid">
        </label>`
    }
    html += '</div>'
  }
  el.innerHTML = html
  // 初始化预览大图
  tippy('.image-radio img', {
    content (data) {
      const imgID = data.src.replace(/.+\/|-.+|\D/g, '')
      return `<img loading="lazy" class="zoom-img" src="/images/Background-Color/${imgID}-2x.png">`
    },
    maxWidth: 740,
    allowHTML: true,
    appendTo: document.body,
    placement: 'right'
  })
}

/**
 * @description 处理拖入的图片文件列表
 * @param {FileList | File[]} fileList - 用户通过文件选择或拖拽得到的文件集合
 * @returns
 */
async function setSelectedImages (fileList) {
  const files = Array.from(fileList || [])

  // 只保留图片类型
  const images = files.filter(f => f && f.type && f.type.startsWith('image/'))
  if (images.length === 0) return notify(lang.validImages)

  // 清空上一批已选择的图片
  clearSelectedImages()

  if (images.length > MAX_IMAGES) {
    notify(localize['maxImagesSelected'].replace(/@/g, MAX_IMAGES))
  }

  blobs = images.slice(0, MAX_IMAGES)

  // 创建 Object URL 用于预览
  selectedUrls = blobs.map(f => URL.createObjectURL(f))
  // 重置为当前第一张图片作为预览
  previewIndex = 0
  // 预加载所有图片
  await preloadAll()
  // 渲染预览界面
  renderPreview()
}

// 渲染预览区域
function renderPreview () {
  if (!blobs.length) {
    preview.innerHTML = ''
    return
  }

  // 当前图片总数
  const total = blobs.length
  // 判断是否可以切换到上一张
  const canPrev = previewIndex > 0
  // 判断是否可以切换到下一张
  const canNext = previewIndex < total - 1

  preview.innerHTML = `
    <div class="d-flex align-items-center justify-content-center gap-2 mt-3">
      <button type="button" class="btn btn-outline-secondary btn-sm" id="prevImg" ${canPrev ? '' : 'disabled'}>
        ←
      </button>

      <div class="text-center" style="max-width: 100%;">
        <img
          src="${selectedUrls[previewIndex]}"
          class="img-fluid rounded-3 shadow-sm"
          style="max-height: 320px; object-fit: contain;"
        >
        <div class="small text-muted mt-2">${previewIndex + 1} / ${total}</div>
      </div>

      <button type="button" class="btn btn-outline-secondary btn-sm" id="nextImg" ${canNext ? '' : 'disabled'}>
        →
      </button>
    </div>
  `

  // 获取上一张按钮
  const prevBtn = document.getElementById('prevImg')
  // 获取下一张按钮
  const nextBtn = document.getElementById('nextImg')

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (previewIndex > 0) {
        previewIndex--
        renderPreview()
      }
    }
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      if (previewIndex < blobs.length - 1) {
        previewIndex++
        renderPreview()
      }
    }
  }
}

// 点击按钮打开选择器
document.querySelector('.select-image').addEventListener('click', () => {
  fileInput.click()
})

// 拖动事件
dragArea.addEventListener('dragover', event => {
  event.preventDefault()
  dragArea.classList.add('hover')
})

dragArea.addEventListener('dragleave', () => {
  dragArea.classList.remove('hover')
})

// 拖入多张
dragArea.addEventListener('drop', event => {
  event.preventDefault()
  dragArea.classList.remove('hover')
  setSelectedImages(event.dataTransfer.files)
})

// 选择多张
fileInput.addEventListener('change', event => {
  setSelectedImages(event.target.files)
  // 允许连续选择同一批文件也触发 change
  event.target.value = ''
})

// 获取定时任务列表
async function getTask () {
  const config = await sendBg({
    action: 'getConfig'
  })
  return config?.schedule ?? {}
}

// ==================== 定时任务 ====================

// 删除任务
window.removeTask = function (btn) {
  const row = btn.closest('tr')
  if (row) {
    const id = row.getAttribute('data-id')

    // 淡出动画
    row.style.transition = 'all 0.3s ease'
    row.style.opacity = '0'
    row.style.transform = 'translateX(20px)'

    setTimeout(() => {
      row.remove()
      const event = new CustomEvent('taskRemoved', { detail: { id } })
      window.dispatchEvent(event)
    }, 300)
  }
}

// 监听全局删除事件
window.addEventListener('taskRemoved', async e => {
  const id = String(e.detail.id)
  const taskList = await getTask()
  if (taskList[id]) {
    delete taskList[id]
  }
  await sendBg({
    action: 'setConfig',
    param: {
      schedule: taskList
    }
  })
})

let deleteTimer = null
// 1.2 秒
const LONG_PRESS_TIME = 1200

// 事件代理
document.getElementById('taskQueueBody').addEventListener('mousedown', e => {
  const btn = e.target.closest('.btn-action-delete')
  if (!btn) return

  deleteTimer = setTimeout(() => {
    deleteTimer = null
    removeTasks()
  }, LONG_PRESS_TIME)
})

document.addEventListener('mouseup', e => {
  if (!deleteTimer) return
  clearTimeout(deleteTimer)
  deleteTimer = null
})

document.getElementById('taskQueueBody').addEventListener('click', e => {
  const btn = e.target.closest('.btn-action-delete')
  if (!btn) return

  // 如果是长按触发过，就不单删
  if (deleteTimer === null) return

  window.removeTask(btn)
})

// 删除任务队列
async function removeTasks () {
  const taskList = await getTask()

  const taskIds = Object.entries(taskList)
    .filter(([, task]) => task.status !== 'pending')
    .map(([id]) => id)

  if (taskIds.length === 0) return

  // 确认弹窗
  const ok = window.confirm(localize['deleteScheduledTasksConfirm'])
  if (!ok) return

  // UI 动画
  taskIds.forEach(id => {
    const row = document.querySelector(`tr[data-id="${id}"]`)
    if (!row) return

    row.style.transition = 'all 0.3s ease'
    row.style.opacity = '0'
    row.style.transform = 'translateX(20px)'

    setTimeout(() => row.remove(), 300)
  })

  // 一次性删除配置
  taskIds.forEach(id => delete taskList[id])

  await sendBg({
    action: 'setConfig',
    param: { schedule: taskList }
  })

  notify(localize['deleteScheduledTasks'].replace('@', taskIds.length))
}

// 渲染定时任务列表
const renderTasks = async () => {
  const tbody = document.getElementById('taskQueueBody')
  if (!tbody) return

  // 状态列表
  const statusConfig = {
    pending: { text: localize['pending'], class: 'status-pending' },
    processing: { text: localize['processing'], class: 'status-processing' },
    success: { text: localize['success'], class: 'status-success' },
    failed: { text: localize['failed'], class: 'status-failed' },
    expired: { text: localize['expired'], class: 'status-expired' },
    error: { text: localize['error'], class: 'status-error' }
  }

  let html = ''

  const taskList = await getTask()

  // 按时间从旧到新排序
  const sortedList = Object.fromEntries(Object.entries(taskList).sort(([timeA], [timeB]) => Number(timeA) - Number(timeB)))

  // 加载到列表
  Object.entries(sortedList).forEach(([time, task]) => {
    console.log(task)
    const status = task.status || 'pending'
    const config = statusConfig[status] || statusConfig['pending']

    const date = new Date(Number(time))
    // YYYY/MM/DD
    const dPart = date.toLocaleDateString()
    // HH:mm
    const tPart = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    html += `
    <tr data-id="${time}">
      <td class="text-center">
        <span class="badge-status ${config.class}">${config.text}</span>
      </td>

      <td class="text-center">
        <div style="font-size: 0.75rem; line-height: 1.2; color: #64748b;">
          ${dPart}<br>
          <span style="font-size: 0.85rem; color: #334155;">${tPart}</span>
        </div>
      </td>

      <td class="text-center">
      ${task.bgId ? `<img src="/images/Background-Color/${task.bgId}.jpg" class="task-thumb" loading="lazy">` : ''}
        
      </td>

      <td>
        <div class="task-content-preview">
          ${htmlEscape(task.content)}
        </div>
      </td>

      <td class="text-center">
        <div class="task-target">
          <div style="font-size: 0.7rem; opacity: 0.7;">
            [${task.targetType === 'group' ? localize['groupCount'].replace('@', task.group.length) : localize['timeline']}]
          </div>
        </div>
      </td>
      <td class="text-center">
        <button class="btn btn-sm btn-action-delete" onclick="window.removeTask(this)">🗑️</button>
      </td>
    </tr>
  `
  })
  tbody.innerHTML = html
}

// 交互逻辑
const scheduleToggle = document.getElementById('scheduleToggle')
const scheduleInputContainer = document.getElementById('scheduleInputContainer')
const sendBtn = document.getElementById('sendPost')

// 切换定时开关
scheduleToggle.addEventListener('change', e => {
  const isScheduled = e.target.checked

  if (isScheduled) {
    // 开启定时
    scheduleInputContainer.style.display = 'block'
    sendBtn.innerText = localize['addToQueue']
    sendBtn.classList.remove('btn-primary')
    sendBtn.classList.add('btn-success')
  } else {
    // 关闭定时
    scheduleInputContainer.style.display = 'none'
    sendBtn.innerText = localize['post']
    sendBtn.classList.add('btn-primary')
    sendBtn.classList.remove('btn-success')
  }
})

// 初始化运行
document.addEventListener('DOMContentLoaded', () => {
  loadBackgroundColor()

  const taskTabTrigger = document.getElementById('task-tab')
  taskTabTrigger.addEventListener('click', renderTasks)
})
