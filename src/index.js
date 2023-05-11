// Function to fetch data from the server
function getData() {
    fetch('')
      .then(response => response.json())
      .then(data => {
        document.getElementById('output').innerText = JSON.stringify(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Function to post data to the server
  function postData() {
    const data = {
      name: 'John Doe',
      age: 25,
      email: 'johndoe@example.com'
    };
  
    fetch('db.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {
        document.getElementById('output').innerText = 'Data posted successfully!';
        console.log(responseData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }