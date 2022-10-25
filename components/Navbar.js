import React from 'react'
import {
    Button,
    Avatar,
    Spacer
} from '@chakra-ui/react'
import { signOut } from "next-auth/react"

const Navbar = ({ auth }) => {
    return (
        <nav className='relative'>
            <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20'>
                <h1 className='font-bold'>Aka's Games</h1>
                <Spacer />
                <Avatar name='user image' src={auth.user.image} />
                <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
        </nav>
    )
}

export default Navbar