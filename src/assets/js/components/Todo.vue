<template>
  <div>
    <input v-model="item" />
    <button v-on:click="add_item()">Add Item</button>
    <ol><li v-for="(it,idx) in items">
      {{ it }} <button v-on:click="del_item( idx )"> x </button>
    </li></ol>
  </div>
</template>

<style>
</style>

<script>
  export default {
    data () {
      return {
        items: [ 'aaa', 'bbb', 'ccc', ],
        item: 'todo',
      }
    },
    methods: {
      add_item: function () { this.items.push( this.item ) },
      del_item: function ( _idx ) { this.items.splice( _idx, 1 ) }
    }
  };
</script>
