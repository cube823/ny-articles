import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/app/store'
import { useGetArticleByQueriesQuery } from 'src/app/useApi'
import Layout from 'src/components/Layout'
import PostList from 'src/components/Layout/PostList'
import { addList, initializeList } from 'src/features/entireListSlice'

import LoadingIndicator from 'src/components/Cores/LoadingIndicator'

const Home = () => {
  const ref = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const headline = useSelector((state: RootState) => state.headlineFilter.headline)
  const date = useSelector((state: RootState) => state.dateFilter.date)
  const glocations = useSelector((state: RootState) => state.glocationsFilter.glocations)

  const [currentPage, setCurrentPage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const { data, isFetching, isLoading } = useGetArticleByQueriesQuery({
    headline,
    date,
    glocations: glocations.map((g) => g.value),
    page: currentPage,
  })

  const entireList = useSelector((state: RootState) => state.entireListController.entireList)

  const handleScroll = () => {
    if (ref.current) {
      const scrollHeight = ref.current.scrollHeight
      const scrollTop = ref.current.scrollTop
      const clientHeight = ref.current.clientHeight
      if (scrollTop + clientHeight >= scrollHeight && isFetching === false) {
        setCurrentPage((prev) => prev + 1)
        setLoading(true)
      }
    }
  }

  useEffect(() => {
    if (data && loading) {
      dispatch(addList(data))
      setLoading(false)
    }
  }, [data, dispatch, loading])

  useEffect(() => {
    if (headline || date || glocations.length) {
      if (data) {
        dispatch(initializeList(data))
      }
    }
  }, [data, date, dispatch, glocations.length, headline])

  return (
    <Layout ref={ref} onScroll={handleScroll}>
      {entireList.length
        ? entireList.map((data, index) => <PostList data={data} key={`articles_${index}`} />)
        : undefined}
      {loading || isLoading || isFetching ? <LoadingIndicator /> : undefined}
    </Layout>
  )
}

export default Home
