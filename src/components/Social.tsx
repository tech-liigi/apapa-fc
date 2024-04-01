'use client'
import React from 'react';

const Social = ()=>{
    return (
        <div className="flex my-2">
            <div onClick={() => {
                navigator.clipboard.writeText(typeof  window !== "undefined" ? window.location.href : "");
            }} className="rounded-full max-h-[37px] mr-2 p-2 bg-[#EEEEEE] cursor-pointer group">
                <svg className="max-w-[20px] max-h-[20px]" width="30" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="duration-[0.2s] group-hover:fill-primary" d="M4.72196 19.778C5.18584 20.2425 5.73693 20.6108 6.34358 20.8617C6.95023 21.1126 7.60048 21.2411 8.25696 21.24C8.91359 21.2411 9.56398 21.1125 10.1708 20.8617C10.7776 20.6108 11.3289 20.2425 11.793 19.778L14.621 16.949L13.207 15.535L10.379 18.364C9.81543 18.925 9.05263 19.2399 8.25746 19.2399C7.46229 19.2399 6.69949 18.925 6.13596 18.364C5.57447 17.8007 5.25917 17.0378 5.25917 16.2425C5.25917 15.4471 5.57447 14.6842 6.13596 14.121L8.96496 11.293L7.55096 9.87896L4.72196 12.707C3.78577 13.6454 3.26001 14.9169 3.26001 16.2425C3.26001 17.568 3.78577 18.8395 4.72196 19.778ZM20.278 11.293C21.2137 10.3542 21.7391 9.08288 21.7391 7.75746C21.7391 6.43204 21.2137 5.16068 20.278 4.22196C19.3395 3.28577 18.068 2.76001 16.7425 2.76001C15.4169 2.76001 14.1454 3.28577 13.207 4.22196L10.379 7.05096L11.793 8.46496L14.621 5.63596C15.1845 5.07495 15.9473 4.75999 16.7425 4.75999C17.5376 4.75999 18.3004 5.07495 18.864 5.63596C19.4255 6.19923 19.7408 6.96213 19.7408 7.75746C19.7408 8.55279 19.4255 9.31569 18.864 9.87896L16.035 12.707L17.449 14.121L20.278 11.293ZM8.96395 16.95L7.54895 15.536L16.036 7.05005L17.45 8.46505L8.96395 16.95Z" fill="black"/>
                    <path className="duration-[0.2s] group-hover:fill-secondary" d="M4.72196 19.778C5.18584 20.2425 5.73693 20.6108 6.34358 20.8617C6.95023 21.1126 7.60048 21.2411 8.25696 21.24C8.91359 21.2411 9.56398 21.1125 10.1708 20.8617C10.7776 20.6108 11.3289 20.2425 11.793 19.778L14.621 16.949L13.207 15.535L10.379 18.364C9.81543 18.925 9.05263 19.2399 8.25746 19.2399C7.46229 19.2399 6.69949 18.925 6.13596 18.364C5.57447 17.8007 5.25917 17.0378 5.25917 16.2425C5.25917 15.4471 5.57447 14.6842 6.13596 14.121L8.96496 11.293L7.55096 9.87896L4.72196 12.707C3.78577 13.6454 3.26001 14.9169 3.26001 16.2425C3.26001 17.568 3.78577 18.8395 4.72196 19.778ZM20.278 11.293C21.2137 10.3542 21.7391 9.08288 21.7391 7.75746C21.7391 6.43204 21.2137 5.16068 20.278 4.22196C19.3395 3.28577 18.068 2.76001 16.7425 2.76001C15.4169 2.76001 14.1454 3.28577 13.207 4.22196L10.379 7.05096L11.793 8.46496L14.621 5.63596C15.1845 5.07495 15.9473 4.75999 16.7425 4.75999C17.5376 4.75999 18.3004 5.07495 18.864 5.63596C19.4255 6.19923 19.7408 6.96213 19.7408 7.75746C19.7408 8.55279 19.4255 9.31569 18.864 9.87896L16.035 12.707L17.449 14.121L20.278 11.293ZM8.96395 16.95L7.54895 15.536L16.036 7.05005L17.45 8.46505L8.96395 16.95Z" fill="black"/>
                </svg>
            </div>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${typeof  window !=="undefined" ? window.location.href:""}`} target="_blank" rel="noopener noreferrer">
            <div className="rounded-full max-h-[37px] mr-2 p-2 bg-[#EEEEEE] cursor-pointer group">
                <svg className="max-w-[20px] max-h-[20px]" width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="duration-[0.2s] group-hover:fill-secondary" d="M32.0833 17.9427C32.0833 9.83934 25.5542 3.27026 17.5 3.27026C9.44583 3.27026 2.91666 9.83934 2.91666 17.9427C2.91666 25.266 8.24955 31.3362 15.2213 32.4369V22.184H11.5185V17.9427H15.2213V14.7102C15.2213 11.0329 17.3986 9.00169 20.7296 9.00169C22.3253 9.00169 23.9941 9.28827 23.9941 9.28827V12.8991H22.1553C20.3437 12.8991 19.7786 14.0302 19.7786 15.1905V17.9427H23.8232L23.1767 22.184H19.7786V32.4369C26.7505 31.3362 32.0833 25.2663 32.0833 17.9427Z" fill="black"/>
                </svg>
            </div> </a>
            <a href={`https://twitter.com/intent/tweet?url=${typeof  window !=="undefined" ? window.location.href:""}`} target="_blank" rel="noopener noreferrer"><div className="rounded-full max-h-[37px] mr-2 p-2 bg-[#EEEEEE] cursor-pointer group">
            <svg className="max-w-[20px] max-h-[20px]" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="duration-[0.2s] group-hover:fill-secondary" d="M17.1761 4.24243H19.9362L13.9061 11.0198L21 20.2424H15.4456L11.0951 14.649L6.11723 20.2424H3.35544L9.80517 12.9932L3 4.24243H8.69545L12.6279 9.35505L17.1761 4.24243ZM16.2073 18.6178H17.7368L7.86441 5.78171H6.2232L16.2073 18.6178Z" fill="black"/>
            </svg>
            </div></a>
        </div>
    )
}

export default Social;