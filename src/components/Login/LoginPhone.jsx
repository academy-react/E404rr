import { useState } from 'react'
import FormInput from '../../components/common/FormInput'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import LoginVerify from './LoginVerify'

const LoginPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verify, setVerify] = useState(false)
  const handleVerify = (val) => {
    setPhoneNumber(val.phone)
    setVerify(!verify) 
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validation = yup.object({
    phone: yup.string().required("لطفا پر کنید.").matches(phoneRegExp, 'شماره تلفن نادرست است.')
  })

  return (
    <Formik 
    initialValues={{ phone: '' }}
    onSubmit={handleVerify}
    validationSchema={validation}>

      <Form>
        { verify? (
          <div>
            <p className="m-9 text-xl">لطفا کد ارسال شده را وارد کنید</p>
            <p className="m-9 text-xl">{phoneNumber}</p>
          </div>
        )
          :  <p className="m-9 text-xl">شماره تلفن خود را وارد کنید</p> }
        { !verify? (
          <div>
            <div className="relative lg:w-[25rem]">
            <Field name='phone' type='text' placeholder='شماره تلفن' component={FormInput} />
            </div>
            <ErrorMessage name='phone' component={'p'} className='text-danger max-w-[25rem]' />

            <button className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg' >بعدی</button>
          </div>
        ) : <LoginVerify /> }
      </Form>
    </Formik>
  )
}

export default LoginPhone
