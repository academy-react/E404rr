import FormInput from '../../components/common/FormInput'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const RegisterVerify = () => {
  return (
    <Formik 
    initialValues={{ code: '' }}
    onSubmit={() => alert('form submited')}
    >

      <Form>
        <div>
          <div className='relative lg:w-[25rem]'>
            <Field name='code' type='text' placeholder='کد فرستاده شده...' component={FormInput} />
          </div>
          <ErrorMessage name='code' component={'p'} className='text-danger max-w-[25rem]' />

          <button type='submit' className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg' >ورود</button>
        </div>
      </Form>
    </Formik>
  )
}

export default RegisterVerify
