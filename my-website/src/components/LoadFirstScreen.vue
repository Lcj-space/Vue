<template>
    <div>
        <div id="mask"></div>
        <div>
            <div class="loader">
                <div class="loader-inner line-scale-pulse-out">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-size: 16px;
        background: #323b43;
        color: #fff;
    }

    #mask{
        position: fixed;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        z-index: 99999;
        background: #323b43;
    }

    .loader {
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        max-width: 25%;
        height: 200px;
        align-items: center;
        justify-content: center;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 99999;
    }

    .line-scale-pulse-out > div {
        background-color: #fff;
        width: 4px;
        height: 35px;
        border-radius: 2px;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        display: inline-block;
        -webkit-animation: line-scale-pulse-out 0.9s 0s infinite cubic-bezier(.85, .25, .37, .85);
        animation: line-scale-pulse-out 0.9s 0s infinite cubic-bezier(.85, .25, .37, .85);
    }

    @keyframes line-scale-pulse-out {
        0% {
            -webkit-transform: scaley(1);
            transform: scaley(1);
        }
        50% {
            -webkit-transform: scaley(0.4);
            transform: scaley(0.4);
        }
        100% {
            -webkit-transform: scaley(1);
            transform: scaley(1);
        }
    }

    .line-scale-pulse-out > div:nth-child(1), .line-scale-pulse-out > div:nth-child(5) {
        /* -webkit-animation-delay: 0.4s !important; */
        animation-delay: 0.4s !important;
    }

    .line-scale-pulse-out > div:nth-child(2), .line-scale-pulse-out > div:nth-child(4) {
        -webkit-animation-delay: 0.2s !important;
        animation-delay: 0.2s !important;
    }

    .line-scale-pulse-out > div:nth-child(4) {
        -webkit-animation-delay: 0.2s !important;
        animation-delay: 0.2s !important;
    }

    .line-scale-pulse-out > div:nth-child(5) {
        /* -webkit-animation-delay: 0.4s !important; */
        animation-delay: 0.4s !important;
    }
</style>