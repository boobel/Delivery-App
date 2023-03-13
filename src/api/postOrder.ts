const postOrder = async ( data = {}) => {
    const response = await fetch('http://localhost:3000/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }

export {postOrder}