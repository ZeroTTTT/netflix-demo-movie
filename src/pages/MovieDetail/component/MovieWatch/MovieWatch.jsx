import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

// const MovieWatch = ({video}) => {
//     const opts = {
//         //  height: '100%',
//         //  width: '100%',
//         height: '500px', // 높이를 픽셀 단위로 지정
//         width: '800px', // 너비를 픽셀 단위로 지정
//         playerVars: {
//             autoplay: 1,
//             modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
//         },
//         };
//   return (
//     // <div style={{height: '100%'}}>
//     <div>
//         <YouTube
//             videoId={video && video[0]?.key}
//             // style={{ height: '100%' }}
//             opts={opts}
//             onReady={(event) => event.target.mute()}
//         />
//     </div>
//   )
// }
// export default MovieWatch


const MovieWatch = ({ video }) => {
    const [videoSize, setVideoSize] = useState({ width: '100%', height: '100%' });

    useEffect(() => {
        const handleResize = () => {
            // 부모 요소의 크기를 가져와서 동영상의 크기를 조절합니다.
            const parentWidth = document.getElementById('parent-container').offsetWidth;
            const parentHeight = document.getElementById('parent-container').offsetHeight;
            setVideoSize({ width: parentWidth, height: parentHeight });
        };

        // 화면 크기가 변경될 때마다 handleResize 함수를 호출하여 동영상 크기를 업데이트합니다.
        window.addEventListener('resize', handleResize);
        handleResize(); // 처음 렌더링 시 크기를 설정합니다.

        return () => {
            // 이벤트 리스너를 정리합니다.
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const opts = {
        height: videoSize.height,
        width: videoSize.width,
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
        },
    };

    return (
        <div id="parent-container" style={{ width: '100%', height: '500px' }}> {/* 부모 요소 */}
            <YouTube
                videoId={video && video[0]?.key}
                opts={opts}
                onReady={(event) => event.target.mute()}
            />
        </div>
    );
};

export default MovieWatch;