import FormInput from '../../components/common/FormInput'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const RegisterVerify = ({handlePhone}) => {
  return (
    <Formik 
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
    </Formik>
  )
}

export default RegisterVerify