import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import logo from '../assets/imgs/swiphr-logo.png'
import homeIcon from '../assets/imgs/home-logo.png'
import orderIcon from '../assets/imgs/order-icon.png'
import subscriptionIcon from '../assets/imgs/subscription-icon.png'
import customerIcon from '../assets/imgs/customer-icon.png'
import productIcon from '../assets/imgs/product-icon.png'
import discountIcon from '../assets/imgs/discount-icon.png'
import reportingIcon from '../assets/imgs/reporting-icon.png'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import digitalIcon from '../assets/imgs/digitalIcon.png'
import bundleIcon from '../assets/imgs/bundleIcon.png'
import giftCardIcon from '../assets/imgs/giftCard.png'
import imageIcon from '../assets/imgs/imageIcon.svg'
import leftArrow from '../assets/imgs/leftArrow.png'
import userImg from '../assets/imgs/femi-icon.png'


import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import NewProduct from './NewProduct'
import Header from './Header'
import ProductTypeCard from './ProductTypeCard'

const navigation = [
  { name: 'Home', href: '#', icon: homeIcon, current: true },
  { name: 'Orders', href: '#', icon: orderIcon,  children: [
    { name: 'Today', href: '#' },
    { name: 'Yesterday', href: '#' },
    { name: '3 days ago', href: '#' },
  ], current: false },
  { name: 'Subscription', href: '#', icon: subscriptionIcon, current: false },
  { name: 'Customers', href: '#', icon: customerIcon, current: false },
  { name: 'Products', href: '#', icon: productIcon,  children: [
    { name: 'All products', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'Attributes', href: '#' },
    { name: 'Gift cards', href: '#' },
    { name: 'Purchase links', href: '#' },
  ], current: false },
  { name: 'Discount', href: '#', icon: discountIcon, current: false },
  { name: 'Reporting', href: '#', icon: reportingIcon, current: false },
]
const card = [
    {title: 'Physical', body: 'Item has weight and needs shipping or pickup by customer', icon: productIcon, current: true },
    {title: 'Digital', body: 'Item is delivered digitally or provided as a service', icon: digitalIcon, current: false },
    {title: 'Bundle', body: 'Item are grouped into several physical or digital products', icon: bundleIcon, current: false },
    {title: 'Gift Card', body: 'Generate a unique code for store credit when purchased', icon: giftCardIcon, current: false  }
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
        <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#F5F5F5] px-6 pb-2 pt-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      {navigation.map((item) => (
                        <li key={item.name}>
                            {!item.children ? (
                                <a
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-green-300' : 'hover:bg-green-300',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700')
                                }
                                >
                                <img src={item.icon} className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                {item.name}
                                </a>
                            ) : (
                                <Disclosure as="div">
                                {({ open }) => (
                                    <>
                                    <Disclosure.Button
                                        className={classNames(
                                        item.current ? 'bg-green-300' : 'hover:bg-green-300',
                                        'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                                        )}
                                    >
                                        <img src={item.icon} className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                        {item.name}
                                        <ChevronUpIcon
                                        className={classNames(
                                            open ? 'rotate-90 text-gray-900' : 'text-gray-800',
                                            'ml-auto h-5 w-5 shrink-0')
                                        }
                                        aria-hidden="true"
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel as="ul" className="mt-1 px-2">
                                        {item.children.map((subItem) => (
                                        <li key={subItem.name}>
                                            {/* 44px */}
                                            <Disclosure.Button
                                            as="a"
                                            href={subItem.href}
                                            className={classNames(
                                                subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                                'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                            )}
                                            >
                                            {subItem.name}
                                            </Disclosure.Button>
                                        </li>
                                        ))}
                                    </Disclosure.Panel>
                                    </>
                                )}
                                </Disclosure>
                            )}
                        </li>
                    ))}
                    
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col pt-6">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={logo}
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                      {!item.children ? (
                          <a
                          href={item.href}
                          className={classNames(
                              item.current ? 'bg-green-300' : 'hover:bg-green-300',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700')
                          }
                          >
                          <img src={item.icon} className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                          {item.name}
                          </a>
                      ) : (
                          <Disclosure as="div">
                          {({ open }) => (
                              <>
                              <Disclosure.Button
                                  className={classNames(
                                  item.current ? 'bg-green-300' : 'hover:bg-green-300',
                                  'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                                  )}
                              >
                                  <img src={item.icon} className="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                                  {item.name}
                                  <ChevronUpIcon
                                  className={classNames(
                                      open ? '-rotate-180 text-gray-900' : 'text-gray-800',
                                      'ml-auto h-5 w-5 shrink-0')
                                  }
                                  aria-hidden="true"
                                  />
                              </Disclosure.Button>
                              <Disclosure.Panel as="ul" className="mt-1 px-2">
                                  {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                      {/* 44px */}
                                      <Disclosure.Button
                                      as="a"
                                      href={subItem.href}
                                      className={classNames(
                                          subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                          'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                      )}
                                      >
                                      {subItem.name}
                                      </Disclosure.Button>
                                  </li>
                                  ))}
                              </Disclosure.Panel>
                              </>
                          )}
                          </Disclosure>
                      )}
                  </li>
                    ))}
                  </ul>
                </li>
                
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 border"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={userImg}
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Oluwafemi</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src={userImg}
              alt=""
            />
          </a>
        </div>
 
        <main className="py-10 lg:pl-72 md:px-16 md:pr-32">
          <div className="px-4 sm:px-6 lg:px-8">
            <button className='flex gap-1 items-center bg-slate-300 rounded-2xl px-3 py-1'>
                <div className='flex justify-center items-center  w-4 h-4 mt-1.5'><img src={leftArrow} alt="" className='object-cover w-full h-full' /></div> <span className='text-sm'>Back</span>
            </button>
          </div>
          <div>
              <Header />
          </div>
          <div className='grid  md:grid-cols-3 gap-4 pl-4 pr-4 py-5' >
            <label htmlFor="input1" className='md:col-span-2'>
                <p>Product Name</p>
                <input type="text" id='input1' className='w-full rounded-md border border-[#ccc] shadow-md' />
            </label>
            <label htmlFor="input2" className='md:col-span-1 '>
                <p>Product Name</p>
                <input type="text" id='input2' placeholder='Optional' className='w-full rounded-md border-[#ccc] shadow-md' />
            </label>
          </div>

          <div>
            <p className='pl-4 mt-4 font-bold'>Type</p>
              <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 p-4'>
                {card.map((item) =>{
                    return <ProductTypeCard card={item} />
                })}
              </div>
          </div>
          <div className='mx-4'>
            <p className='my-3 font-bold'>Type</p>

            <div className='border h-[255px] w-[100%] flex flex-col justify-center items-center'>
                    <img src={imageIcon} alt="" width={48} />
                    <p className='font-bold'>Add image</p>
                    <p className='font-thin text-sm'>Drag & drop upload</p>
            </div>

            <label htmlFor="categories" className='block my-4'>
                <p>Categories</p>
                <input type="text" id='categories' className='rounded-md w-[100%] shadow-md border border-[#ccc]' />
            </label>
          </div>
        </main>
      </div>
    </>
    
  )
}

export default Dashboard
