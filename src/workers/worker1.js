addEventListener('message', e => {
  const { data } = e
  if (data && typeof data === 'number') {
    postMessage(data * data)
  } else {
    postMessage(10)
  }
})
