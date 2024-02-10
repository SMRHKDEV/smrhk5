import { Button, Typography } from '@mui/material'

export default function NotFound() {
    return (
        <div className='not-found-page'>
            <Typography variant='h2'>
                یافت نشد!
            </Typography>

            <Typography variant='inherit'>
                دوست عزیز، صفحه درخواستی شما وجود ندارد. مجدد تلاش بفرمایید.
            </Typography>
            <Button href='/' variant='outlined' sx={{ minWidth: '125px', marginTop: '26px' }} color='warning'>
                بازگشت به صفحه اصلی
            </Button>
        </div>
    )
}