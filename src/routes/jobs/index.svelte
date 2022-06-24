<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/jobs.json");
    const jobs = await res.json();
    return { jobs };
  }
</script>

<script>
  export let jobs;
</script>

<h2>job page</h2>
<ul>
  {#each jobs as job}
    <li><a href={`jobs/${job.id}`} sapper:prefetc>{job.title}</a></li>
  {/each}
</ul>

<div class="btn">
  <a href="jobs/Create">Add new job</a>
</div>

<style>
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  li a {
    display: block;
    padding: 15px;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    margin: 10px auto;
    text-decoration: none;
  }
  li a:hover {
    background: #fbfbfb;
  }
  div {
    text-align: center;
  }
</style>
