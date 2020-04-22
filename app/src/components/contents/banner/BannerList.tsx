/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const BannerList: React.SFC = () => {
    return (
        <ul>
            <li>
                <a href="#">
                    <img src="https://user-images.githubusercontent.com/41350459/79964018-14c37900-84c5-11ea-8011-6da17cd0249d.jpg" alt="웹 표준 지침서 보기" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://user-images.githubusercontent.com/41350459/79964034-18ef9680-84c5-11ea-8e02-d19887527a6c.jpg" alt="CSS 버튼 만들기" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://user-images.githubusercontent.com/41350459/79964046-1d1bb400-84c5-11ea-93ed-44a6fdbac689.jpg" alt="로그인 폼 만들기" />
                </a>
            </li>
        </ul>
    );
}

export default BannerList;