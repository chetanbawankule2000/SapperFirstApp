<script>
  import { goto } from "@sapper/app";
  let title;
  let salary;
  let details;

  const handleSubmit = async () => {
    console.log(title, salary, details);
    if (title && salary && details) {
      const res = await fetch("jobs.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, salary, details }),
      });

      const updatedJobs = await res.json();
      console.log(updatedJobs);
      goto("jobs");
    }
  };
</script>

<h1>Add new job</h1>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="job title" bind:value={title} required />
  <input type="number" placeholder="amount" bind:value={salary} required />
  <textarea placeholder="job detais" bind:value={details} required />
  <button class="btn">Add new job</button>
</form>

<style>
  h1 {
    text-align: center;
  }
  form {
    max-width: 360px;
    margin: 40px auto;
    text-align: center;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 10px auto;
    border: 1px solid #eee;
    border-radius: 8px;
  }
</style>
