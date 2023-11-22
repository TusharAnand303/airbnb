"use client"
import React,{useCallback} from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhoto, TbPhotoPlus } from 'react-icons/tb';

declare global{
  var cloundinary: any;
}
interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}


const ImageUpload:React.FC<ImageUploadProps> = ({
  onChange, value
}) => {

  const handelUpload = useCallback((result: any)=>{
    onChange(result.info.secure_url);
  },[onChange]);

  return (
    <CldUploadWidget
    onUpload={handelUpload}
    uploadPreset='g4l942h6'
    options={{
      maxFiles: 1
    }}
    >
      {({open}) =>{
        return (
          <div onClick={() => open?.()} className='relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-gray-300 flex flex-col justify-center items-center gap-4 text-gray-600'>
            <TbPhotoPlus size={50}/>
            <div className='font-semibold text-lg'>
              Click to Upload
            </div>
            {
              value && (
                <div className='absolute inset-0 w-full h-full'>
                  <Image
                  alt='upload'
                  fill
                  style={{objectFit: 'cover'}}
                  src={value}
                  />
                </div>
              )
            }
          </div>
        )
      }}
      </CldUploadWidget>
  )
}

export default ImageUpload
