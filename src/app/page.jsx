'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Loading from './loading';
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      push('/login');
      return;
    }
    setIsLogin(true);
  }, [push])

  if (!isLogin) {
    Loading;
  }

  return (
    <h1> Hello world</h1>
  )
}
