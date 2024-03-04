const Razorpay = require('razorpay');

apiKey="rzp_test_xHAjUDO4CXppBW"
apiSecret="gi2n6UclYsDLlg4rWC508ayw"


const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;