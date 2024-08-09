import Image from "next/image";
import React from 'react'

export default function UserProfile() {
  return (
    <div>
        <Image 
        className="rounded-full" 
        src="" 
        width={24} 
        height={24} 
        alt="user profile picture"
        />
    </div>
  )
}
