<script>
    let count = 0
    const increment = () => {
      count += 1
    }
  </script>
  
  <button on:click={increment} class="hello">
    count is {count} from svelte
  </button>
  
  <style>
    .hello {
      font-size: 2rem;
      font-weight: bold;
      color: #222;
    }
  </style>
  