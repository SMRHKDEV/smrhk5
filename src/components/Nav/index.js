import Link from 'next/link';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import './index.scss'

const link = <Link href={'#products'}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
    </svg>
</Link>
const actions = [
    { icon: link, name: 'محصولات' },
    { icon: link, name: 'محصولات' },
    { icon: link, name: 'محصولات' },
    { icon: link, name: 'محصولات' },
];

export default function MyNav() {
    return (
        <Box component={'div'} className="mynav">
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg></div>}
                >
                    {actions.map((action, key) => (
                        <SpeedDialAction
                            key={key}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </Box>
    )
}