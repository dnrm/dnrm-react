import { Line } from 'react-chartjs-2';

const ChartJs = (props: any) => {
    return (
        <Line
            data={props.data}
            options={{
                scales: {
                    y: {
                        max: 30,
                    },
                },
                animations: {
                    y: {
                        easing: 'easeInOutElastic',
                        // @ts-ignore
                        from: (ctx: any) => {
                            if (ctx.type === 'data') {
                                if (ctx.mode === 'default' && !ctx.dropped) {
                                    ctx.dropped = true;
                                    return 0;
                                }
                            }
                        },
                    },
                },
            }}
        />
    );
};

export default ChartJs;
