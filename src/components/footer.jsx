import React from 'react'

const Footer = () => {
    return (
        <div class="relative w-full  py-24 flex flex-col justify-center items-center bg-black text-white text-center font-os gap-9">

            {/* <!-- 1-element (OOO “MASSHTAB UNIVERSITY” va boshqalar) --> */}
            <div class="w-10/12  text-[19px] leading-[19px]">
                <div class="text-white">
                    OOO “MASSHTAB UNIVERSITY” Toshkent shahri, Yunusobod tumani, Buyuk Turon MFY, Ц-2, 24A uy. H/R 2020 8000 4057 1574 9001 4001 “ANORBANK AJ” MFO: 01183 INN: 310900931<br /><br />
                    This site or product is not part of or endorsed by Facebook, Google, or any social media platform in any way<br /><br />
                    FACEBOOK is a trademark of META PLATFORMS, Inc. YOUTUBE and GOOGLE are trademarks of ALPHABET, Inc.
                </div>
            </div>

            {/* <!-- 2-element (Telefon raqami) --> */}
            <div class="w-10/12 text-[48px] leading-[48px]">
                <a href="tel:998937767700" class="text-white">+998 78 113 79 00</a>
            </div>

            {/* <!-- 3-element (Zamonaviy kasblar ta’lim markazi) --> */}
            <div class="w-10/12  text-[22px] leading-[22px]">
                <div class="text-white">
                    Zamonaviy kasblar ta’lim markazi. Barcha huquqlar himoyalangan, 2024.
                </div>
            </div>
        </div>

    )
}

export default Footer