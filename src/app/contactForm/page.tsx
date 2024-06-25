'use client'
import React from 'react';
import Footer from '../components/footer/Footer';
import StrokeIcon from '../components/icons/stroke';
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from '../components/ui/Select';
import Input from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import Image from 'next/image';
import GenericImage from '../components/images/genericPhoto.jpg';

const ContactForm: React.FC = () => {
  const projectTime = [
    {
      label: "0 - 2 meses"
    },
    {
      label: "2 - 4 meses"
    },
    {
      label: "4 - 8 meses"
    },
  ]

  return (
    <div className='w-full h-sreen '>
      <div className='w-full h-sreen flex pt-8 pb-8 px-0 bg-[#121214]'>
        <div className='min-w-[30rem] h-[35rem] ml-8 px-11 py-14 bg-[#0A0A0B] rounded-lg'>
          <h1 className='text-white text-3xl font-medium'>
            Comece sua <br />
            jornada conosco.
          </h1>
          <p className='text-[#7B7B7B] mt-8 text-base'>
            Juntos transformaremos sua ideia<br />
            em produto real e acessível ao<br />
            mercado de startups!
          </p>

          <div className='w-full h-40 bg-white/[2%] mt-24 px-6 py-8'>
            <div className='flex items-center justify-between'>
              <div className='flex'>
                <div className='w-14 h-14 rounded-full bg-red-500 flex items-center justify-center overflow-hidden'>
                  <div className='h-full w-full'>
                    <Image
                      alt='Sofia Prado'
                      className='object-cover w-full h-full rounded-full'
                      width={56}
                      height={56}
                      src={GenericImage}
                    />
                  </div>
                </div>
                <div className='ml-4'>
                  <h1>Sofia Prado</h1>
                  <p>CTO Dribble</p>
                </div>
              </div>
              <StrokeIcon />
            </div>
            <p className='text-[#B3B3B3] text-sm mt-3'>
              Juntos transformaremos sua ideia em produto real e
              acessível ao mercado de startups!
            </p>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex justify-end gap-14 mt-6 mr-14'>
            <p className='text-[#909090] text-sm cursor-pointer hover:text-[#F19C1C] transition-colors duration-100'>Home</p>
            <p className='text-[#909090] text-sm cursor-pointer hover:text-[#F19C1C] transition-colors duration-100'>O que fazemos</p>
            <p className='text-[#909090] text-sm cursor-pointer hover:text-[#F19C1C] transition-colors duration-100'>Depoimentos</p>
            <p className='text-[#909090] text-sm cursor-pointer hover:text-[#F19C1C] transition-colors duration-100'>Quem somos</p>
          </div>

          <div className='mt-16 px-14'>
            <h1 className='mb-10'>Informações para contato</h1>

            <div className='grid grid-cols-2 gap-8'>
              <Input placeholder='Seu nome' />
              <Input placeholder='Seu e-mail' />
              <Input placeholder='Seu telefone' />
              <Input placeholder='Sua empresa' />
            </div>
          </div>

          <div className='w-full px-14 mt-14 flex gap-8'>
            <div className='w-full'>
              <h1 className='mb-10'>Em qual etapa está o seu projeto</h1>
              <Select>
                <SelectTrigger
                >
                  <SelectValue
                    placeholder="Selecionar"
                  />
                  <SelectContent>
                    <SelectGroup>
                      {
                        projectTime.map((time, index) => (
                          <div
                            className='hover:bg-white/10 cursor-pointer p-2 rounded-lg transition-colors duration-100'
                            key={index}>
                            <p>{time.label}</p>
                          </div>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>

            <div className='w-full'>
              <h1 className='mb-10'>Quanto tempo você tem para desenvolver?</h1>
              <Select>
                <SelectTrigger
                >
                  <SelectValue
                    placeholder="Selecionar"
                  />
                  <SelectContent>
                    <SelectGroup>
                      {
                        projectTime.map((time, index) => (
                          <div
                            className='hover:bg-white/10 cursor-pointer p-2 rounded-lg transition-colors duration-100'
                            key={index}>
                            <p>{time.label}</p>
                          </div>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>

          <div className='mt-14 px-14'>
            <h1 className='mb-10'>Descrição do projeto</h1>

            <textarea
              placeholder='Conte-nos sobre seu projeto'
              className='bg-transparent border hover:border-[#434343] border-[#2B2B2B] h-32 rounded-lg w-full px-3 focus:border-[#F19C1C] py-3 placeholder:text-[#707070] outline-none resize-none'
              style={{ overflowY: 'auto' }}
            />
          </div>

          <div className='mt-16 px-14'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <Checkbox className='size-3' />
                <p className='text-[#909090] ml-3 text-sm'>Li e aceito a <span className='text-[#F19C1C] cursor-pointer'>politica de privacidade</span></p>
              </div>

              <button className='w-40 h-14 bg-[#F19C1C] text-[#1F1F1F]'>
                <p className='font-medium text-sm'>ENVIAR</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactForm;