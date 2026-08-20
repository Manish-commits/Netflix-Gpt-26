import React, { useRef } from 'react';
import MovieCard from './MovieCard';

 const trendingList = [
        {
            id: 1,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABerq2ClNRPIEQaqVmLtb1SR3gf9NPVOHyqmAcfdlJwpJNnL5TaURY3KHjDsGDAHvZ1YJ2hm8pL0tAROFD4jOYPfJ3iHZzC6BgCO7GYr_cAMSFflVHyPhJnmHIb25TQISUf3n.webp?r=d33'
        },
        {
            id: 2,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABejSYC_DP_davWAspoYDdc5UiyuElbnN8BAPXUPNnMlaQv94EpDM7sz7W03xEvL_Zfik6GbYfm3jFSRgC_ziprEUyQPfKouLzbG9vFNtQ08fbKzKkM2vt8m6TJs_qbjpzYUz.webp?r=639'
        },
        {
            id: 3,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABf05Qw56C9HlqGzXEu7kjj8-mlqXFqR5iNQvWr3SXUy8cMe5d-bIVbJhPqiuDXQir8CmDeFBaeth9dlV0ZE6BwzpkzmRYiFjwrM.webp?r=374'
        },
        {
            id: 4,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABe9lWVq7kFsB38ZCuRRdq9eMuf90RdHx4rAhzSq-qSxQD4IpS-BBbTF5rGRRVAdNjEqPjD3Iw6E2EMseDvN-VV2V_8Ehj7ZzQ3DDlUNuSpoNNk6n-0XmyyTNA76xvta2kRvU.webp?r=267'
        },
        {
            id: 5,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRHEcpZrJWcGzHq1AkgW7B8aDNiXEqlU9JBHEwHiXFTEQ8fXNl14SJJMQJYMweSLASaAFxBjCZUrsnZ2DCoViO0dcfgJvky0pYY.webp?r=d8e'
        },
        {
            id: 6,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWQnjEgoKoL20AK_MX_UXqWOqwvyE2a7W5yThmnL5CWSUMm6-YTio7Kh-mYcxjprRrLQcGzfm5KgRzXmJbz8kCmYXDlkq4d_YrH8kCGGS3b6RA3T7F65C1146Yuk4Vn7ziWj.webp?r=6b0'
        },
        {
            id: 7,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdASUN6RmS_9Cz6RcM4PKxYy7dodzanPKLVynf3XovDr3AcakvtDLt5PVphbOEWfopc547BO194AXv3WsY4MT8efTOi8sjiEvY8.webp?r=873'
        },
        {
            id: 8,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABevqnI_ZIxXIbPg7e804EBWlJDu2WE9sPDLN-2r0maVzKVKijib7GQViWgcGDs4g2s1Nb-FHECqdukyTdxe_sBJ4IFjxVwdjopI.webp?r=ce9'
        },
        {
            id: 9,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABV634RJ705XipxQXbUOmWTlPM6NMLGOMgv8O6-1mpxjUiHuGTO8aU_smM_58vn7E3eNAHVvWJq0PdI-Nfb186hH-lCfPKhOAdpg.webp?r=92a'
        },
        {
            id: 10,
            title: 'Musafir Cafe',
            thumbnail: 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdCNdKR9dgupDlDI12eOrjd3d1uHJXGw537qUxGjCrEHiyDqJ5OIPTEP107q4e-qLJERuWreYp5bF7t5BxNEI7SfZhIY3p_Sp4w.webp?r=434'
        },
    ];

const TrendingNow = () => {
    const scrollRef = useRef(null);

    const handleSwipe = (direction) => {
         if (!scrollRef.current) return;
          const scrollAmount = 300;

           scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }

    return (
        <div className='w-full bg-black text-white py-5'>
            <div className='w-full lg:max-w-[1000px] mx-auto p-4 flex flex-col gap-4'>
                <h2 className='text-[24px] font-semibold'>Trending Now</h2>
                <div className='flex gap-1'>
                    <button className='rounded-lg font-bold border px-2 cursor-pointer'
                        onClick={() => handleSwipe('left')}>
                        {'<'}
                    </button>
                    <div ref={scrollRef} className='w-full flex gap-2 overflow-scroll scrollbar-hide'>
                        {
                            trendingList.map((item) => {
                                return <MovieCard key={item.id} cardDetails={item} />
                            })
                        }
                    </div>
                    <button className='rounded-lg font-bold border px-2 cursor-pointer'
                        onClick={() => handleSwipe('right')}>
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrendingNow
