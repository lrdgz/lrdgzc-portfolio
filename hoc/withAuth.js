import { useGetUser } from '@/apollo/actions';

export default (WrappedComponent) => (props) => {
    const { data: { user } = {}, loading, error } = useGetUser({fetchPolicy: 'network-only'});

    if(
        !loading &&
        (!user || error) &&
        typeof window !== 'undefined'
    ){
        
    }

    return <WrappedComponent {...props} />
}
