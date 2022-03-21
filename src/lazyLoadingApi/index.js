import { useCallback, useRef } from 'react';

const data = []
const LazyLoadingScrollable = () => {


    const loadingData = true;
    const observerScroll = useRef();
    const lastClaimListRef = useCallback(
        (node) => {
            if (loadingData) return;
            if (observerScroll.current) observerScroll.current.disconnect();
            observerScroll.current = new InterscetionObserver(entries => {
                if (entries[0].isIntersecting && hasLoadMore) {
                    loadMoreItems();
                }
            });
            if (node) observerScroll.current.observe(node)

        },
        [hasLoadMore],
    )
    
    return (
        <div>
            {
                data.map((item, index) =>
                    data.length === index + 1 ?
                        method(item, index, lastClaimListRef)
                        : method(item, index, lastClaimListRef)
                )
            }
        </div>
    )
}