import axios from "axios";

const handlePayment = async (amount) => {
    const URL = import.meta.env.VITE_API_URL;

    try {
        const { data: keyData} = await axios.get(`${URL}/api/v2/payment/key`, {withCredentials: true});
        const { key } = keyData;
        //console.log(key);


        const { data: orderData} = await axios.post(`${URL}/api/v2/payment/process`, { amount }, {withCredentials: true});
        const { order } = orderData;
        //console.log(order);

        const options = {
        key, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        order_id: order.id, // This is the order_id created in the backend
        callback_url: `${URL}/api/v2/payment/verification`, // Your success URL
        prefill: {
          name: 'CodeSketch User',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#bababa'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    
    } catch(e){
        console.log(e)
    }
}

export default handlePayment;