<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [['umkm1@gmail.com', 'umkm1'],
        ['umkm2@gmail.com', 'umkm2'],
        ['umkm3@gmail.com', 'umkm3'],
        ['umkm4@gmail.com', 'umkm4'],
        ['umkm5@gmail.com', 'umkm5'],
        ['umkm6@gmail.com', 'umkm6'],
        ['umkm7@gmail.com', 'umkm7'],
        ['umkm8@gmail.com', 'umkm8'],
        ['umkm9@gmail.com', 'umkm9'],
        ['umkm10@gmail.com', 'umkm10'],
        ['umkm11@gmail.com', 'umkm11'],
        ['umkm12@gmail.com', 'umkm12'],
        ['umkm13@gmail.com', 'umkm13'],
        ['umkm14@gmail.com', 'umkm14'],
        ['umkm15@gmail.com', 'umkm15'],
        ['umkm16@gmail.com', 'umkm16'],
        ['umkm17@gmail.com', 'umkm17'],
        ['umkm18@gmail.com', 'umkm18'],
        ['umkm19@gmail.com', 'umkm19'],
        ['umkm20@gmail.com', 'umkm20'],
        ['umkm21@gmail.com', 'umkm21'],
        ['umkm22@gmail.com', 'umkm22'],
        ['umkm23@gmail.com', 'umkm23'],
        ['umkm24@gmail.com', 'umkm24'],
        ['umkm25@gmail.com', 'umkm25'],
        ['umkm26@gmail.com', 'umkm26'],
        ['umkm27@gmail.com', 'umkm27'],
        ['umkm28@gmail.com', 'umkm28'],
        ['umkm29@gmail.com', 'umkm29'],
        ['umkm30@gmail.com', 'umkm30'],
        ['umkm31@gmail.com', 'umkm31'],
        ['umkm32@gmail.com', 'umkm32'],
        ['umkm33@gmail.com', 'umkm33'],
        ['umkm34@gmail.com', 'umkm34'],
        ['umkm35@gmail.com', 'umkm35'],
        ['umkm36@gmail.com', 'umkm36'],
        ['umkm37@gmail.com', 'umkm37'],
        ['umkm38@gmail.com', 'umkm38'],
        ['umkm39@gmail.com', 'umkm39'],
        ['umkm40@gmail.com', 'umkm40'],
        ['umkm41@gmail.com', 'umkm41'],
        ['umkm42@gmail.com', 'umkm42'],
        ['umkm43@gmail.com', 'umkm43'],
        ['umkm44@gmail.com', 'umkm44'],
        ['umkm45@gmail.com', 'umkm45'],
        ['umkm46@gmail.com', 'umkm46'],
        ['umkm47@gmail.com', 'umkm47'],
        ['umkm48@gmail.com', 'umkm48'],
        ['umkm49@gmail.com', 'umkm49'],
        ['umkm50@gmail.com', 'umkm50'],
        ['umkm51@gmail.com', 'umkm51'],
        ['umkm52@gmail.com', 'umkm52'],
        ['umkm53@gmail.com', 'umkm53'],
        ['umkm54@gmail.com', 'umkm54'],
        ['umkm55@gmail.com', 'umkm55'],
        ['umkm56@gmail.com', 'umkm56'],
        ['umkm57@gmail.com', 'umkm57'],
        ['umkm58@gmail.com', 'umkm58'],
        ['umkm59@gmail.com', 'umkm59'],
        ['umkm60@gmail.com', 'umkm60'],
        ['umkm61@gmail.com', 'umkm61'],
        ['umkm62@gmail.com', 'umkm62'],
        ['umkm63@gmail.com', 'umkm63'],
        ['umkm64@gmail.com', 'umkm64'],
        ['umkm65@gmail.com', 'umkm65'],
        ['umkm66@gmail.com', 'umkm66'],
        ['umkm67@gmail.com', 'umkm67'],
        ['umkm68@gmail.com', 'umkm68'],
        ['umkm69@gmail.com', 'umkm69'],
        ['umkm70@gmail.com', 'umkm70'],
        ['umkm71@gmail.com', 'umkm71'],
        ['umkm72@gmail.com', 'umkm72'],
        ['umkm73@gmail.com', 'umkm73'],
        ['umkm74@gmail.com', 'umkm74'],
        ['umkm75@gmail.com', 'umkm75'],
        ['umkm76@gmail.com', 'umkm76'],
        ['umkm77@gmail.com', 'umkm77'],
        ['umkm78@gmail.com', 'umkm78'],
        ['umkm79@gmail.com', 'umkm79'],
        ['umkm80@gmail.com', 'umkm80'],
        ['umkm81@gmail.com', 'umkm81'],
        ['umkm82@gmail.com', 'umkm82'],
        ['umkm83@gmail.com', 'umkm83'],
        ['umkm84@gmail.com', 'umkm84'],
        ['umkm85@gmail.com', 'umkm85'],
        ['umkm86@gmail.com', 'umkm86'],
        ['umkm87@gmail.com', 'umkm87'],
        ['umkm88@gmail.com', 'umkm88'],
        ['umkm89@gmail.com', 'umkm89'],
        ['umkm90@gmail.com', 'umkm90'],
        ['umkm91@gmail.com', 'umkm91'],
        ['umkm92@gmail.com', 'umkm92'],
        ['umkm93@gmail.com', 'umkm93'],
        ['umkm94@gmail.com', 'umkm94'],
        ['umkm95@gmail.com', 'umkm95'],
        ['umkm96@gmail.com', 'umkm96'],
        ['umkm97@gmail.com', 'umkm97'],
        ['umkm98@gmail.com', 'umkm98'],
        ['umkm99@gmail.com', 'umkm99'],
        ['umkm100@gmail.com', 'umkm100'],
        ['umkm101@gmail.com', 'umkm101'],
        ['umkm102@gmail.com', 'umkm102'],
        ['umkm103@gmail.com', 'umkm103'],
        ['umkm104@gmail.com', 'umkm104'],
        ['umkm105@gmail.com', 'umkm105'],
        ['umkm106@gmail.com', 'umkm106'],
        ['umkm107@gmail.com', 'umkm107'],
        ['umkm108@gmail.com', 'umkm108'],
        ['umkm109@gmail.com', 'umkm109'],
        ['umkm110@gmail.com', 'umkm110'],
        ['umkm111@gmail.com', 'umkm111'],
        ['umkm112@gmail.com', 'umkm112'],
        ['umkm113@gmail.com', 'umkm113'],
        ['umkm114@gmail.com', 'umkm114'],
        ['umkm115@gmail.com', 'umkm115'],
        ['umkm116@gmail.com', 'umkm116'],
        ['umkm117@gmail.com', 'umkm117'],
        ['umkm118@gmail.com', 'umkm118'],
        ['umkm119@gmail.com', 'umkm119'],
        ['umkm120@gmail.com', 'umkm120'],
        ['umkm121@gmail.com', 'umkm121'],
        ['umkm122@gmail.com', 'umkm122'],
        ['umkm123@gmail.com', 'umkm123'],
        ['umkm124@gmail.com', 'umkm124'],
        ['umkm125@gmail.com', 'umkm125'],
        ['umkm126@gmail.com', 'umkm126'],
        ['umkm127@gmail.com', 'umkm127'],
        ['umkm128@gmail.com', 'umkm128'],
        ['umkm129@gmail.com', 'umkm129'],
        ['umkm130@gmail.com', 'umkm130'],
        ['umkm131@gmail.com', 'umkm131'],
        ['umkm132@gmail.com', 'umkm132'],
        ['umkm133@gmail.com', 'umkm133'],
        ['umkm134@gmail.com', 'umkm134'],
        ['umkm135@gmail.com', 'umkm135'],
        ['umkm136@gmail.com', 'umkm136'],
        ['umkm137@gmail.com', 'umkm137'],
        ['umkm138@gmail.com', 'umkm138'],
        ['umkm139@gmail.com', 'umkm139'],
        ['umkm140@gmail.com', 'umkm140'],
        ['umkm141@gmail.com', 'umkm141'],
        ['umkm142@gmail.com', 'umkm142'],
        ['umkm143@gmail.com', 'umkm143'],
        ['umkm144@gmail.com', 'umkm144'],
        ['umkm145@gmail.com', 'umkm145'],
        ['umkm146@gmail.com', 'umkm146'],
        ['umkm147@gmail.com', 'umkm147'],
        ['umkm148@gmail.com', 'umkm148'],
        ['umkm149@gmail.com', 'umkm149'],
        ['umkm150@gmail.com', 'umkm150'],
        ['umkm151@gmail.com', 'umkm151'],
        ['umkm152@gmail.com', 'umkm152'],
        ['umkm153@gmail.com', 'umkm153'],
        ['umkm154@gmail.com', 'umkm154'],
        ['umkm155@gmail.com', 'umkm155'],
        ['umkm156@gmail.com', 'umkm156'],
        ['umkm157@gmail.com', 'umkm157'],
        ['umkm158@gmail.com', 'umkm158'],
        ['umkm159@gmail.com', 'umkm159'],
        ['umkm160@gmail.com', 'umkm160'],
        ['umkm161@gmail.com', 'umkm161'],
        ['umkm162@gmail.com', 'umkm162'],
        ['umkm163@gmail.com', 'umkm163'],
        ['umkm164@gmail.com', 'umkm164'],
        ['umkm165@gmail.com', 'umkm165'],
        ['umkm166@gmail.com', 'umkm166'],
        ['umkm167@gmail.com', 'umkm167'],
        ['umkm168@gmail.com', 'umkm168'],
        ['umkm169@gmail.com', 'umkm169'],
        ['umkm170@gmail.com', 'umkm170'],
        ['umkm171@gmail.com', 'umkm171'],
        ['umkm172@gmail.com', 'umkm172'],
        ['umkm173@gmail.com', 'umkm173'],
        ['umkm174@gmail.com', 'umkm174'],
        ['umkm175@gmail.com', 'umkm175'],
        ['umkm176@gmail.com', 'umkm176'],
        ['umkm177@gmail.com', 'umkm177'],
        ['umkm178@gmail.com', 'umkm178'],
        ['umkm179@gmail.com', 'umkm179'],
        ['umkm180@gmail.com', 'umkm180'],
        ['umkm181@gmail.com', 'umkm181'],
        ['umkm182@gmail.com', 'umkm182'],
        ['umkm183@gmail.com', 'umkm183'],
        ['umkm184@gmail.com', 'umkm184'],
        ['umkm185@gmail.com', 'umkm185'],
        ['umkm186@gmail.com', 'umkm186'],
        ['umkm187@gmail.com', 'umkm187'],
        ['umkm188@gmail.com', 'umkm188'],
        ['umkm189@gmail.com', 'umkm189'],
        ['umkm190@gmail.com', 'umkm190'],
        ['umkm191@gmail.com', 'umkm191'],
        ['umkm192@gmail.com', 'umkm192'],
        ['umkm193@gmail.com', 'umkm193'],
        ['umkm194@gmail.com', 'umkm194'],
        ['umkm195@gmail.com', 'umkm195'],
        ['umkm196@gmail.com', 'umkm196'],
        ['umkm197@gmail.com', 'umkm197'],
        ['umkm198@gmail.com', 'umkm198'],
        ['umkm199@gmail.com', 'umkm199'],
        ['umkm200@gmail.com', 'umkm200'],
        ['umkm201@gmail.com', 'umkm201'],
        ['umkm202@gmail.com', 'umkm202'],
        ['umkm203@gmail.com', 'umkm203'],
        ['umkm204@gmail.com', 'umkm204'],
        ['umkm205@gmail.com', 'umkm205'],
        ['umkm206@gmail.com', 'umkm206'],
        ['umkm207@gmail.com', 'umkm207'],
        ['umkm208@gmail.com', 'umkm208'],
        ['umkm209@gmail.com', 'umkm209'],
        ['umkm210@gmail.com', 'umkm210'],
        ['umkm211@gmail.com', 'umkm211'],
        ['umkm212@gmail.com', 'umkm212'],
        ['umkm213@gmail.com', 'umkm213'],
        ['umkm214@gmail.com', 'umkm214'],
        ['umkm215@gmail.com', 'umkm215'],
        ['umkm216@gmail.com', 'umkm216'],
        ['umkm217@gmail.com', 'umkm217'],
        ['umkm218@gmail.com', 'umkm218'],
        ['umkm219@gmail.com', 'umkm219'],
        ['umkm220@gmail.com', 'umkm220'],
        ['umkm221@gmail.com', 'umkm221'],
        ['umkm222@gmail.com', 'umkm222'],
        ['umkm223@gmail.com', 'umkm223'],
        ['umkm224@gmail.com', 'umkm224'],
        ['umkm225@gmail.com', 'umkm225'],
        ['umkm226@gmail.com', 'umkm226'],
        ['umkm227@gmail.com', 'umkm227'],
        ['umkm228@gmail.com', 'umkm228'],
        ['umkm229@gmail.com', 'umkm229'],
        ['umkm230@gmail.com', 'umkm230'],
        ['umkm231@gmail.com', 'umkm231'],
        ['umkm232@gmail.com', 'umkm232'],
        ['umkm233@gmail.com', 'umkm233'],
        ['umkm234@gmail.com', 'umkm234'],
        ['umkm235@gmail.com', 'umkm235'],
        ['umkm236@gmail.com', 'umkm236'],
        ['umkm237@gmail.com', 'umkm237'],
        ['umkm238@gmail.com', 'umkm238'],
        ['umkm239@gmail.com', 'umkm239'],
        ['umkm240@gmail.com', 'umkm240'],
        ['umkm241@gmail.com', 'umkm241'],
        ['umkm242@gmail.com', 'umkm242'],
        ['umkm243@gmail.com', 'umkm243'],
        ['umkm244@gmail.com', 'umkm244'],
        ['umkm245@gmail.com', 'umkm245'],
        ['umkm246@gmail.com', 'umkm246'],
        ['umkm247@gmail.com', 'umkm247'],
        ['umkm248@gmail.com', 'umkm248'],
        ['umkm249@gmail.com', 'umkm249'],
        ['umkm250@gmail.com', 'umkm250'],
        ['umkm251@gmail.com', 'umkm251'],
        ['umkm252@gmail.com', 'umkm252'],
        ['umkm253@gmail.com', 'umkm253'],
        ['umkm254@gmail.com', 'umkm254'],
        ['umkm255@gmail.com', 'umkm255'],
        ['umkm256@gmail.com', 'umkm256'],
        ['umkm257@gmail.com', 'umkm257'],
        ['umkm258@gmail.com', 'umkm258'],
        ['umkm259@gmail.com', 'umkm259'],
        ['umkm260@gmail.com', 'umkm260'],
        ['umkm261@gmail.com', 'umkm261'],
        ['umkm262@gmail.com', 'umkm262'],
        ['umkm263@gmail.com', 'umkm263'],
        ['umkm264@gmail.com', 'umkm264'],
        ['umkm265@gmail.com', 'umkm265'],
        ['umkm266@gmail.com', 'umkm266'],
        ['umkm267@gmail.com', 'umkm267'],
        ['umkm268@gmail.com', 'umkm268'],
        ['umkm269@gmail.com', 'umkm269'],
        ['umkm270@gmail.com', 'umkm270'],
        ['umkm271@gmail.com', 'umkm271'],
        ['umkm272@gmail.com', 'umkm272'],
        ['umkm273@gmail.com', 'umkm273'],
        ['umkm274@gmail.com', 'umkm274'],
        ['umkm275@gmail.com', 'umkm275'],
        ['umkm276@gmail.com', 'umkm276'],
        ['umkm277@gmail.com', 'umkm277'],
        ['umkm278@gmail.com', 'umkm278'],
        ['umkm279@gmail.com', 'umkm279'],
        ['umkm280@gmail.com', 'umkm280'],
        ['umkm281@gmail.com', 'umkm281'],
        ['umkm282@gmail.com', 'umkm282'],
        ['umkm283@gmail.com', 'umkm283'],
        ['umkm284@gmail.com', 'umkm284'],
        ['umkm285@gmail.com', 'umkm285'],
        ['umkm286@gmail.com', 'umkm286'],
        ['umkm287@gmail.com', 'umkm287'],
        ['umkm288@gmail.com', 'umkm288'],
        ['umkm289@gmail.com', 'umkm289'],
        ['umkm290@gmail.com', 'umkm290'],
        ['umkm291@gmail.com', 'umkm291'],
        ['umkm292@gmail.com', 'umkm292'],
        ['umkm293@gmail.com', 'umkm293'],
        ['umkm294@gmail.com', 'umkm294'],
        ['umkm295@gmail.com', 'umkm295'],
        ['umkm296@gmail.com', 'umkm296'],
        ['umkm297@gmail.com', 'umkm297'],
        ['umkm298@gmail.com', 'umkm298'],
        ['umkm299@gmail.com', 'umkm299'],
        ['umkm300@gmail.com', 'umkm300'],
        ['umkm301@gmail.com', 'umkm301'],
        ['umkm302@gmail.com', 'umkm302'],
        ['umkm303@gmail.com', 'umkm303'],
        ['umkm304@gmail.com', 'umkm304'],
        ['umkm305@gmail.com', 'umkm305'],
        ['umkm306@gmail.com', 'umkm306'],
        ['umkm307@gmail.com', 'umkm307'],
        ['umkm308@gmail.com', 'umkm308'],
        ['umkm309@gmail.com', 'umkm309'],
        ['umkm310@gmail.com', 'umkm310'],
        ['umkm311@gmail.com', 'umkm311'],
        ['umkm312@gmail.com', 'umkm312'],
        ['umkm313@gmail.com', 'umkm313'],
        ['umkm314@gmail.com', 'umkm314'],
        ['umkm315@gmail.com', 'umkm315'],
        ['umkm316@gmail.com', 'umkm316'],
        ['umkm317@gmail.com', 'umkm317'],
        ['umkm318@gmail.com', 'umkm318'],
        ['umkm319@gmail.com', 'umkm319'],
        ['umkm320@gmail.com', 'umkm320'],
        ['umkm321@gmail.com', 'umkm321'],
        ['umkm322@gmail.com', 'umkm322'],
        ['umkm323@gmail.com', 'umkm323'],
        ['umkm324@gmail.com', 'umkm324'],
        ['umkm325@gmail.com', 'umkm325'],
        ['umkm326@gmail.com', 'umkm326'],
        ['umkm327@gmail.com', 'umkm327'],
        ['umkm328@gmail.com', 'umkm328'],
        ['umkm329@gmail.com', 'umkm329'],
        ['umkm330@gmail.com', 'umkm330'],
        ['umkm331@gmail.com', 'umkm331'],
        ['umkm332@gmail.com', 'umkm332'],
        ['umkm333@gmail.com', 'umkm333'],
        ['umkm334@gmail.com', 'umkm334'],
        ['umkm335@gmail.com', 'umkm335'],
        ['umkm336@gmail.com', 'umkm336'],
        ['umkm337@gmail.com', 'umkm337'],
        ['umkm338@gmail.com', 'umkm338'],
        ['umkm339@gmail.com', 'umkm339'],
        ['umkm340@gmail.com', 'umkm340'],
        ['umkm341@gmail.com', 'umkm341'],
        ['umkm342@gmail.com', 'umkm342'],
        ['umkm343@gmail.com', 'umkm343'],
        ['umkm344@gmail.com', 'umkm344'],
        ['umkm345@gmail.com', 'umkm345'],
        ['umkm346@gmail.com', 'umkm346'],
        ['umkm347@gmail.com', 'umkm347'],
        ['umkm348@gmail.com', 'umkm348'],
        ['umkm349@gmail.com', 'umkm349'],
        ['umkm350@gmail.com', 'umkm350'],
        ['umkm351@gmail.com', 'umkm351'],
        ['umkm352@gmail.com', 'umkm352'],
        ['umkm353@gmail.com', 'umkm353'],
        ['umkm354@gmail.com', 'umkm354'],
        ['umkm355@gmail.com', 'umkm355'],
        ['umkm356@gmail.com', 'umkm356'],
        ['umkm357@gmail.com', 'umkm357'],
        ['umkm358@gmail.com', 'umkm358'],
        ['umkm359@gmail.com', 'umkm359']];

        for ($i = 0; $i < count($user); $i++) {
            DB::table('users')->insert([
                'email' => $user[$i][0],
                'password' => Hash::make($user[$i][1])
            ]);
        }
    }
}
