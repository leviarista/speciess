import React from 'react'
import Link from 'next/link'

function Button(props) {
    const { text, className, href, icon, target } = props;
    const content = <>
        {icon === "info" && <img src="/images/info-icon.svg" alt="Info icon" />}
        {icon === "love" && <img src="/images/love-icon.svg" alt="Info icon" />}
        {text ?? ""}
    </>
    return (
        <Link href={href ?? "#"} >
            {target ?
                <a className={"button " + className} target="_blank" rel="noopenner noreferrer">
                    {content}
                </a> :
                <a className={"button " + className}>
                    {content}
                </a>
            }
        </Link>
    )
}

export default Button
