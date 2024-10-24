import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { phoneNumberMask } from '../utils/phone'
import { Form } from '../components/forms'
import { AtSign, Mail, Phone, SendHorizonal, User } from 'lucide-react'

const createFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Digite seu nome.' })
    .min(3, { message: 'Digite um nome válido' }),
  email: z
    .string()
    .nonempty({ message: 'Digite seu email.' })
    .min(3, { message: 'Digite um email válido.' }),
  cellphone: z
    .string()
    .nonempty({ message: 'Digite seu celular.' })
    .min(15, { message: 'Digite um celular válido.' }),
  subject: z
    .string()
    .nonempty({ message: 'Digite um assunto.' })
    .min(10, { message: 'O assunto deve ter no mínimo 10 caracteres.' }),
  message: z
    .string()
    .nonempty({ message: 'Deixe sua mensagem.' })
    .min(3, { message: 'Sua mensagem deve ter no mínimo 10 caracteres.' }),
})

type CreateFormData = z.infer<typeof createFormSchema>

export function Contact() {
  const createForm = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  const { handleSubmit, setValue, watch } = createForm

  const phoneValue = watch('cellphone')

  useEffect(() => {
    setValue('cellphone', phoneNumberMask(phoneValue))
  }, [phoneValue, setValue])

  function newContact(data: CreateFormData) {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <div
        id='contact'
        className='flex min-h-screen w-full flex-col justify-center'
      >
        <h1 className='w-full py-10 text-center text-3xl'>Contato</h1>

        <div className='flex flex-col items-center'>
          <FormProvider {...createForm}>
            <form
              id='sendcontact'
              onSubmit={handleSubmit(newContact)}
              className='flex w-5/6 flex-col space-y-4 sm:w-2/4'
            >
              <Form.Field>
                <Form.Prefix>
                  <User className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='name'
                  name='name'
                  placeholder='Digite seu nome.'
                />
              </Form.Field>
              <Form.ErrorMessage field='name' />
              <Form.Field>
                <Form.Prefix>
                  <AtSign className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='email'
                  name='email'
                  placeholder='Digite seu email.'
                />
              </Form.Field>
              <Form.ErrorMessage field='email' />
              <Form.Field>
                <Form.Prefix>
                  <Phone className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='cellphone'
                  name='cellphone'
                  placeholder='Digite seu celular.'
                />
              </Form.Field>
              <Form.ErrorMessage field='cellphone' />
              <Form.Field>
                <Form.Prefix>
                  <Mail className='size-5' />
                </Form.Prefix>
                <Form.Input
                  type='message'
                  name='message'
                  placeholder='Digite sua mensagem.'
                />
              </Form.Field>
              <Form.ErrorMessage field='message' />
            </form>

            <button
              type='submit'
              form='sendcontact'
              className='py2 mt-4 flex items-center justify-center gap-2 rounded-md border border-blue-500 bg-blue-900 px-8 py-2 font-semibold text-white'
            >
              Enviar
              <SendHorizonal className='size-5' />
            </button>
          </FormProvider>
        </div>
      </div>
    </>
  )
}
