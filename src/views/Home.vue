<template>
  <div class="home">
    <button @click="workerTest()">worker!!</button>
    {{ this.reload }}
  </div>
</template>

<script>
// @ is an alias to /src
import Worker1 from 'worker-loader!@/workers/worker1'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      reload: 0
    }
  },
  methods: {
    workerTest: function () {
      const worker = new Worker1()
      worker.onmessage = e => {
        const { data } = e
        this.reload = data
        console.log('data', data)
        worker.terminate()
      }
      worker.postMessage(20)
    },
    workerTestLoop: function () {
      for (let i = 0; i < 10; i++) {
        const worker = new Worker1()
        worker.onmessage = e => {
          const { data } = e
          this.reload += data
          worker.terminate()
        }
        worker.postMessage(20)
      }
    }
  }
}
</script>
