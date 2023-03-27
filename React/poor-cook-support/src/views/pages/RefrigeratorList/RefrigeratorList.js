import React from 'react';
// 公式
import { Grid, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// 自作コンポーネント
import Header from '../../components/block/Header';
import { blue, blueGrey } from '@mui/material/colors';
import { CheckBox, StayPrimaryLandscape } from '@mui/icons-material';


export default function RefrigeratorList() {

    // styled
    // テーブルセルのスタイル
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    // テーブル行のスタイル
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    // 初期処理
    const { control, handleSubmit } = useForm({
        defaultValues: {
            food: '',
            quantity: ''
        },
    });


    // 定義
    function createData(food, quantity) {
        return { food, quantity };
    }

    const rows = [
        createData('ココア', 1),
        createData('ピーマン', 4),
        createData('キャベツ', 1),
        createData('豆腐', 5),
        createData('きゅうり', 3),
        createData('ミニトマト', 1),
        createData('ヨーグルト', 5),
        createData('牛乳', 1),
        createData('納豆', 2),
    ];

    // 登録ボタン押下
    const onSubmit = (data) => {
        console.log(data.food);
    }

    return (
        <>
            <Header />
            {/* 入力欄 */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={0.1} justifyContent="center" alignItems="center" direction="column">
                    <Grid item>
                        <Controller
                            control={control}
                            name="food"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="食品"
                                    fullWidth
                                    margin="normal"
                                    placeholder="冷蔵庫の中身"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            control={control}
                            name="quantity"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="個数"
                                    fullWidth
                                    margin="normal"
                                    placeholder="いくつ？"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            type="submit"
                        >
                            登録
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <br />
            {/* テーブル */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 200 }} stickyHeader aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>✓</StyledTableCell>
                            <StyledTableCell align="left" >食品</StyledTableCell>
                            <StyledTableCell align="right">個数</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.food}                              >
                                <TableCell padding='checkbox'>
                                    <CheckBox/>
                                </TableCell>
                                <StyledTableCell component="th" scope="row" align="left">
                                    {row.food}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}