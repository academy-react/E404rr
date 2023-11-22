import FormInput from '../../components/common/FormInput'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SignAPISetTwo } from '../../core/services/api/signsettwo'
import { useState } from 'react'

const RegisterVerify = ({handlePhone  ,   phoneNumber }) => {
  const [verify, setVerify] = useState()
  const handleVerify = (values) => {
    setVerify(values) 
  }

  const SignTwo = async () => {
    const CodeObj = {
  
         phoneNumber : phoneNumber ,
         verifyCode: code
  
    }


    const user2 = await SignAPISetTwo(CodeObj) 


    console.log(user2 , "user doooo");
  }


  const handleSubmit = (values , actions) => {
    SignUser(values , actions)

  }

  return (
<>

<Formik 
    initialValues={{ code: '' }}
    onSubmit={handleSubmit}
    >

      <Form>
        <div>
          <div className='relative pb-4 lg:w-[25rem]'>
            <Field name='code' type='text' placeholder='کد فرستاده شده...' 
                    className="focus:outline-none focus:placeholder:opacity-0 w-full mx-2 my-4 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green"
                    />
            <ErrorMessage name='code' component={'p'} className='absolute bottom-0 right-1/2 translate-x-1/2 text-danger max-w-[25rem]' />
          </div>

          <button onClick={SignTwo}  type='onSubmit' className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg' >ثبت</button>
        </div>
      </Form>
    </Formik>





{/* <Formik 
initialValues={{ code: '' }}
onSubmit={handlePhone}
>

  <Form>
    <div>
      <div className='relative pb-4 lg:w-[25rem]'>
        <Field name='code' type='text' placeholder='کد فرستاده شده...' component={FormInput} />
        <ErrorMessage name='code' component={'p'} className='absolute bottom-0 right-1/2 translate-x-1/2 text-danger max-w-[25rem]' />
      </div>

      <button onClick={handlePhone} className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg' >ورود</button>
    </div>
  </Form>
</Formik> */}


</>
  )
}

export default RegisterVerify