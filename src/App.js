import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form"



function App() {

  const { register, handleSubmit, onChange, watch, formState: { errors } } = useForm({ mode: 'onChange' });

  const onSubmit = () => {

  }


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">User Info</h2>


          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>

              </label>

              <input type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {



                  required: {
                    value: true,
                    message: 'Name is Required'
                  },


                })}


              />


              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.name.message}</span>}



              </label>
            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>

              </label>

              <input type="text"
                placeholder="Email Address"


                className="input input-bordered w-full max-w-xs"
                {...register("email", {

                  required: {
                    value: true,
                    message: 'Email is reqired'
                  },

                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Please Provied a Valid Email Adderess',
                  }
                })}


              />


              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt  text-red-500 text-sm">{errors.email.message}</span>}


              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>

              </label>

              <input type="number"
                placeholder="Phone Number"


                className="input input-bordered w-full max-w-xs"
                {...register("phone", {

                  required: {
                    value: true,
                    message: 'Phone Number is reqired'
                  },

                  pattern: {
                    value: /[0-9]/,
                    message: 'Please Provied a Valid Phone Number',
                  }
                })}


              />


              <label className="label">
                {errors.phone?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.phone.message}</span>}
                {errors.phone?.type === 'pattern' && <span className="label-text-alt  text-red-500 text-sm">{errors.phone.message}</span>}


              </label>
            </div>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Aadhaar Number</span>

              </label>

              <input
                placeholder="Aadhaar Number"


                className="input input-bordered w-full max-w-xs"
                {...register("aadhaar", {

                  required: {
                    value: true,
                    message: 'Aadhaar Number is reqired'
                  },

                  pattern: {
                    value: /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/,
                    message: 'Please Provied a Valid Aadhaar Number',
                  }
                })}


              />


              <label className="label">
                {errors.aadhaar?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.aadhaar.message}</span>}
                {errors.aadhaar?.type === 'pattern' && <span className="label-text-alt  text-red-500 text-sm">{errors.aadhaar.message}</span>}


              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">PAN Card Number</span>

              </label>

              <input
                placeholder="PAN Card Number"


                className="input input-bordered w-full max-w-xs"
                {...register("pancard", {

                  required: {
                    value: true,
                    message: 'PAN card number is reqired'
                  },

                  pattern: {
                    value: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
                    message: 'Please Provied a Valid PAN Card Number',
                  }
                })}


              />


              <label className="label">
                {errors.pancard?.type === 'required' && <span className="label-text-alt  text-red-500 text-sm">{errors.pancard.message}</span>}
                {errors.pancard?.type === 'pattern' && <span className="label-text-alt  text-red-500 text-sm">{errors.pancard.message}</span>}


              </label>
            </div>






            <input className='btn  w-full max-w-xs' type="submit" value="Submit" />
          </form>




        </div>
      </div>
    </div>
  );
}

export default App;
