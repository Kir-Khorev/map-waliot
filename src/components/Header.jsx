import React from 'react';

const Header = () => {
    return (
        <header className='app-header' style={{
            fontSize: '20px',
            color: 'white',
            background: 'black',
            left: '0',
            bottom: '0',
            width: '100%',
            padding: '15px 0',
            textAlign: 'center',
        }}>
            <div>Walliot test-map</div>
        </header>
    )
}

export default Header;