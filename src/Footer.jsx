import { useEffect,memo } from 'react';

const Footer = ({ n, sum, inc, dec }) => {

    useEffect(() => {
        console.log("Footer");
    });

    return (
        <footer style={{backgroundColor:'pink'}}>
            <h5>Footer</h5>

            <button onClick={dec}>-</button>
            1-den {n}-e qeder ededlerin cemi: {sum}
            <button onClick={inc}>+</button>
        </footer>
    )
}

export default memo(Footer);
