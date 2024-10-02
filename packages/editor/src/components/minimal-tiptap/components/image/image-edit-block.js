import React, { useRef, useState } from 'react';
import { Button } from '@v1/ui/button';
import { Input } from '@v1/ui/input';
import { Label } from '@v1/ui/label';
import { cn } from '@/lib/editor/utils';
const ImageEditBlock = ({ editor, className, close, ...props }) => {
    const fileInputRef = useRef(null);
    const [link, setLink] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileInputRef.current?.click();
    };
    const handleLink = () => {
        editor.chain().focus().setImage({ src: link }).run();
        close();
    };
    const handleFile = (e) => {
        const files = e.target.files;
        if (!files)
            return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const src = e.target?.result;
            editor.chain().setImage({ src }).focus().run();
        };
        reader.readAsDataURL(files[0]);
        close();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLink();
    };
    return (<form onSubmit={handleSubmit}>
      <div className={cn('space-y-6', className)} {...props}>
        <div className='space-y-1'>
          <Label>Attach an image link</Label>
          <div className='flex'>
            <Input type='url' required placeholder='https://example.com' value={link} className='grow' onChange={(e) => setLink(e.target.value)}/>
            <Button type='submit' className='ml-2 inline-block'>
              Submit
            </Button>
          </div>
        </div>
        <Button className='w-full' onClick={handleClick}>
          Upload from your computer
        </Button>
        <input type='file' accept='image/*' ref={fileInputRef} multiple className='hidden' onChange={handleFile}/>
      </div>
    </form>);
};
export { ImageEditBlock };