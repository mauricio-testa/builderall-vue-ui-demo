<template>
  <bui-notifications
    :notifications="notifications"
    :loading="loading"
    @shown="fetch"
  />
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      notifications: []
    }
  },

  methods: {
    fetch () {
      this.loading = true
      setTimeout(() => {
        this.notifications = [
          {
            read: false,
            _id: 1,
            message: 'Test',
            description: 'Crie seus sites, páginas e funis com o super fácil Construtor 100% Drag-and-Drop e crie-o automaticamente nos dispositivos móveis com sua tecnolo...',
            createdAt: '2021-02-23T21:19:58.258Z'
          },
          {
            read: false,
            _id: 2,
            message: 'Test 2',
            description: 'Crie seus funis com o super fácil Construtor 100% Drag-and-Drop e crie-o automaticamente nos dispositivos móveis com sua tecnologia responsiva. A...',
            createdAt: '2021-02-23T21:19:58.258Z'
          }
        ]
        this.loading = false
      }, 2000)
    }
  }
}
</script>
