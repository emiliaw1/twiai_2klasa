<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twoje BMI</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <div class="top">
        <div class="logo">
            <img src="wzor.png" alt="wzór BMI">
        </div>
            <header class="header">
                <h1>Oblicz swoje BMI</h1>
            </header>
    </div>
    
    <main class="main">
        <table>
            <tr>
                <td>Interpretacja BMI</td>
                <td>Wartość minimalna</td>
                <td>Wartość maksymalna</td>
            </tr>

                <?php
                    $connect = mysqli_connect("localhost", "root", "", "egzamin");
                    $query = "select informacja, wart_min, wart_max from bmi;";
                    $query2= "select informacja, wart_min, wart_max from bmi where id='2';";
                    $query3= "select informacja, wart_min, wart_max from bmi where id='3';";
                    $query4= "select informacja, wart_min, wart_max from bmi where id='4';";
                    $result = mysqli_query($connect, $query);
                    $result2 = mysqli_query($connect, $query2);
                    $result3 = mysqli_query($connect, $query3);
                    $result4 = mysqli_query($connect, $query4);
                    $row = mysqli_fetch_array($result);
                    $row2 = mysqli_fetch_array($result2);
                    $row3 = mysqli_fetch_array($result3);
                    $row4 = mysqli_fetch_array($result4);
                    echo "<tr>";
                    echo "<td>".$row['informacja']."</td>";
                    echo "<td>".$row['wart_min']."</td>";
                    echo "<td>".$row['wart_max']."</td>";
                    echo "</tr>";
                    echo "<tr>";
                    echo "<tr>";
                    echo "<td>".$row2['informacja']."</td>";
                    echo "<td>".$row2['wart_min']."</td>";
                    echo "<td>".$row2['wart_max']."</td>";
                    echo "</tr>";
                    echo "<tr>";
                    echo "<td>".$row3['informacja']."</td>";
                    echo "<td>".$row3['wart_min']."</td>";
                    echo "<td>".$row3['wart_max']."</td>";
                    echo "</tr>";
                    echo "<tr>";
                    echo "<td>".$row4['informacja']."</td>";
                    echo "<td>".$row4['wart_min']."</td>";
                    echo "<td>".$row4['wart_max']."</td>";
                    echo "</tr>";


                    mysqli_close($connect);
                ?>
        </table>
    </main>

    <div class="sections">

    <section class="left">
        <h2>Podaj wagę i wzrost</h2>
        <form action="bmi.php" method="post">
            Waga: <input type="number" name="waga" id="waga" min="1"> <br/>
            Wzrost w cm: <input type="number" name="wzrost" id="wzrost" min="1"> <br/>
            <input type="submit" value="Oblicz i zapamiętaj wynik">
        </form>
        <?php
        $connect = mysqli_connect("localhost", "root", "", "egzamin");
        $waga = $_POST['waga'];
        $wzrost = $_POST['wzrost'];
        if(isset($waga, $wzrost)){
            $bmi = 10000*($waga/($wzrost*$wzrost));
            echo "Twoja waga: ";
            echo $waga;
            echo "; Twój wzrost: ";
            echo $wzrost;
            echo "\nBMI wynosi: ";
            echo $bmi;
            if($bmi<19){
                $bmi_id = 1;
                $query = "insert into wynik values ('', '$bmi_id', date(Y-m-d), '$bmi');";
            }
            else if($bmi>18&&$bmi<26){
                $bmi_id = 2;
                $query = "insert into wynik values ('', '$bmi_id', date(Y-m-d), '$bmi');";
            }
            else if($bmi>25&&$bmi<31){
                $bmi_id = 3;
                $query = "insert into wynik values ('', '$bmi_id', date(Y-m-d), '$bmi');";
            }
            else if($bmi>30&&$bmi<101){
                $bmi_id = 4;
                $query = "insert into wynik values ('', '$bmi_id', date(Y-m-d), '$bmi');";
            }
                
        }
        mysqli_close($connect);
        ?>
    </section>

    <section class="right">
        <img src="rys1.png" alt="ćwiczenia">
    </section>

    </div>
    <footer class="footer">
        <p>Autor: Emilia Wierzbanowska</p>
        <a href="kwerendy.txt">Zobacz kwerendy</a>
    </footer>
</body>
</html>
