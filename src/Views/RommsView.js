const rooms = [
    { url: '//files.revome.cn/public/db8df686e2fc3d21a9f6815cf5299c24_room1.png', linkTo: '#' },
    { url: '//files.revome.cn/public/db9268f022901e631f35e7c0750ce7d1_room2.png', linkTo: '/aboutus' },
    { url: '//files.revome.cn/public/86b793f07664a370fd1b08ad14a058b5_room3.png', linkTo: '/UserAgreement' },
    { url: '//files.revome.cn/public/d9b4369f57993144739bba110f5d2c84_room4.png', linkTo: '/PrivacyAgreement' },
    { url: '//files.revome.cn/public/cefa3eed6003fb9289e8f1d8d7415a1d_room5.png', linkTo: '/PrivacyAgreement' },
    { url: '//files.revome.cn/public/0fa9b5fdb76498ee16d6b0c0c6e64551_room6.png', linkTo: '/PrivacyAgreement' },
    { url: '//files.revome.cn/public/349e4949d51843899783981236d76e5f_room7.png', linkTo: '/PrivacyAgreement' },
    { url: '//files.revome.cn/public/3e10a91c3dc9b3c6b6dd3ea0851005d6_room8.png', linkTo: '/PrivacyAgreement' },
]

function RoomsView() {
    return (
        <div className=" mb-20 grid grid-cols-2  gap-y-4 gap-x-4 px-6  sm:gap-x-6 sm:gap-y-20  sm:px-20 sm:grid-cols-4 ">
            {rooms.map((image) => (
                <div key={image.url} className=" rounded-2xl shadow-xl sm:hover:scale-125 sm:transition-all">
                    <img src={image.url} />
                </div>
            ))}
        </div>
    )
}

export default RoomsView;