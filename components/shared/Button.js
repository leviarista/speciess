import React from 'react'
import Link from 'next/link'

function Button(props) {
    const { text, className, href } = props;
    return (
        <Link href={href ?? "#"} >
            <a className={"button " + className}> {text ?? ""} </a>
        </Link>
    )
}

export default Button
