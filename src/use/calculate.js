import { computed, inject, ref } from 'vue'

export default () => {
  const buffer = ref('0')
  const a = ref('')
  const b = ref('')
  const sign = ref('')
  const finish = ref(false)

  const buttons = inject('buttons')

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const actions = ['×', '−', '+', '÷']

  const functionals = ['c', '±', '%', '←', '.']

  const clear = () => {
    buffer.value = '0'
    a.value = ''
    b.value = ''
    sign.value = ''
    finish.value = false
  }

  const isEmpty = computed(() => buffer.value === '0' | '-0'
  )

  const functional = (key) => {
    if (functionals.includes(key.value)) {
      const idxMinus = buffer.value.indexOf('-')

      switch (key.value) {
        case 'c':
          clear()
          break
        case '←':
          if (buffer.value.length === 1 || buffer.value === 'Error' || buffer.value === '0') {
            buffer.value = '0'
          } else {
            buffer.value = buffer.value.slice(0, buffer.value.length - 1)
          }

          if (!sign.value) {
            a.value = buffer.value
            if (isEmpty.value) {
              a.value = ''
            }
          } else {
            b.value = buffer.value
            if (isEmpty.value) {
              b.value = ''
            }
          }
          break
        case '%':
          if (isEmpty.value) {
            buffer.value = '0'
          } else if (actions.includes(buffer.value)) {
            return false
          } else {
            buffer.value = String(+(buffer.value) / 100)
          }
          a.value = buffer.value
          break
        case '±':
          if (idxMinus === -1 && !actions.includes(buffer.value)) {
            buffer.value = '-' + buffer.value
          } else {
            buffer.value = buffer.value.replace('-', '')
          }
          a.value = buffer.value
          break
        case '.':
          if (buffer.value.includes('.')) {
            return false
          }

          buffer.value += key.value

          if (!sign.value) {
            a.value = buffer.value
            if (isEmpty.value) {
              a.value = ''
            }
          } else {
            b.value = buffer.value
            if (isEmpty.value) {
              b.value = ''
            }
          }
          break
      }
    }
  }

  const action = (key) => {
    if (actions.includes(key.value)) {
      sign.value = key.value
      buffer.value = sign.value
    }

    if (key.value === '=') {
      if (b.value === '') b.value = a.value

      switch (sign.value) {
        case '+':
          buffer.value = String(+(a.value) + +(b.value))
          a.value = buffer.value
          break
        case '−':
          buffer.value = String(+(a.value) - +(b.value))
          a.value = buffer.value
          break
        case '×':
          buffer.value = String(+(a.value) * +(b.value))
          a.value = buffer.value
          break
        case '÷':
          if (b.value === '0') {
            buffer.value = 'Error'
          } else {
            buffer.value = String(+(a.value) / +(b.value))
            a.value = buffer.value
          }
          break
      }
      finish.value = true
    }
  }

  const digit = (key) => {
    if (digits.includes(key.value)) {
      if (key.value === '0' && buffer.value === '0') {
        return false
      } else if (b.value === '' && sign.value === '') {
        a.value += key.value
        buffer.value = a.value
      } else if (a.value !== '' && b.value !== '' && finish.value) {
        b.value = key.value
        finish.value = false
        buffer.value = b.value
      } else {
        if (b.value === '0' && digits.includes(key.value) && key.value !== '.') {
          b.value = key.value
          buffer.value = b.value
        } else {
          b.value += key.value
          buffer.value = b.value
        }
      }
    }
  }

  const clickBtn = (target) => {
    const key = ref(target.dataset.key)

    console.table(['buffer ' + buffer.value, 'a ' + a.value, 'b ' + b.value])

    digit(key)

    functional(key)

    action(key)
  }

  return {
    buttons,
    buffer,
    clickBtn
  }
}
