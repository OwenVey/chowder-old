import { getAuthServerSideProps } from '@/server/common/get-auth-server-side-props';
import { GetServerSideProps } from 'next/types';

export default function Recipes() {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      {/* Start first column (hidden on smaller screens) */}
      <aside className="flex w-full flex-shrink-0 flex-col overflow-y-auto border-r border-gray-6 sm:w-96">
        <div className="border-b border-gray-6 p-4 text-gray-12">Header</div>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <h1 className="text-gray-12">1. One</h1>
          <p className="text-gray-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum.
            Ultrices dui sapien eget mi proin sed. Egestas purus viverra accumsan in nisl nisi
            scelerisque eu ultrices. Amet porttitor eget dolor morbi non arcu risus quis. Mi proin
            sed libero enim sed faucibus. Proin sagittis nisl rhoncus mattis rhoncus. Adipiscing
            diam donec adipiscing tristique risus nec feugiat in fermentum. Est ullamcorper eget
            nulla facilisi etiam. Egestas fringilla phasellus faucibus scelerisque eleifend donec
            pretium vulputate sapien. Magna fringilla urna porttitor rhoncus dolor purus non enim
            praesent. Convallis posuere morbi leo urna molestie. Eu tincidunt tortor aliquam nulla
            facilisi cras fermentum odio. Libero justo laoreet sit amet cursus sit amet. Lacus sed
            turpis tincidunt id aliquet risus feugiat in ante. Quam quisque id diam vel. A
            condimentum vitae sapien pellentesque. Sed enim ut sem viverra aliquet eget sit amet
            tellus. Id nibh tortor id aliquet lectus proin. Sit amet commodo nulla facilisi nullam.
            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Nisl suscipit
            adipiscing bibendum est ultricies integer quis. Bibendum ut tristique et egestas quis
            ipsum suspendisse ultrices. Turpis egestas integer eget aliquet nibh praesent tristique
            magna. Eget arcu dictum varius duis at consectetur lorem. Ac odio tempor orci dapibus
            ultrices. Euismod lacinia at quis risus sed. Duis tristique sollicitudin nibh sit amet
            commodo. Sed faucibus turpis in eu. Pulvinar neque laoreet suspendisse interdum
            consectetur libero id faucibus. Et malesuada fames ac turpis egestas integer. Diam in
            arcu cursus euismod quis viverra. Elementum integer enim neque volutpat ac. Sagittis eu
            volutpat odio facilisis mauris sit amet massa. Amet purus gravida quis blandit turpis
            cursus in. Viverra nam libero justo laoreet sit amet. Nisl vel pretium lectus quam id
            leo in vitae turpis. Consectetur purus ut faucibus pulvinar elementum integer enim.
            Tempor nec feugiat nisl pretium fusce id velit ut tortor. tempor orci dapibus ultrices.
            Euismod lacinia at quis risus sed. Duis tristique sollicitudin nibh sit amet commodo.
            Sed faucibus turpis in eu. Pulvinar neque laoreet suspendisse interdum consectetur
            libero id faucibus. Et malesuada fames ac turpis egestas integer. Diam in arcu cursus
            euismod quis viverra. Elementum integer enim neque volutpat ac. Sagittis eu volutpat
            odio facilisis mauris sit amet massa. Amet purus gravida quis blandit turpis cursus in.
            Viverra nam libero justo laoreet sit amet. Nisl vel pretium lectus quam id leo in vitae
            turpis. Consectetur purus ut faucibus pulvinar elementum integer enim. Tempor nec
            feugiat nisl pretium fusce id velit ut tortor.
          </p>
        </div>
      </aside>
      {/* End first column */}

      {/* Start second column*/}
      <main className="relative z-0 hidden flex-1 overflow-y-auto focus:outline-none sm:block">
        <div className="p-4">
          <h1 className="text-gray-12">2. Two</h1>
          <p className="text-gray-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra
            magna ac placerat vestibulum. Vestibulum lorem sed risus ultricies tristique nulla.
            Purus in mollis nunc sed id. Est ante in nibh mauris cursus mattis molestie. At
            elementum eu facilisis sed odio morbi quis. Vitae sapien pellentesque habitant morbi
            tristique senectus et netus et. Pharetra diam sit amet nisl suscipit adipiscing. Vel
            eros donec ac odio tempor orci dapibus ultrices in. Integer enim neque volutpat ac
            tincidunt vitae. Semper viverra nam libero justo. Mi sit amet mauris commodo quis
            imperdiet massa tincidunt. Ac turpis egestas sed tempus urna. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam quis. Leo duis ut diam quam nulla. Tincidunt
            augue interdum velit euismod. Lacus viverra vitae congue eu consequat ac felis.
            Facilisis sed odio morbi quis commodo odio. Mi bibendum neque egestas congue quisque
            egestas diam in. Ut enim blandit volutpat maecenas volutpat blandit. Purus viverra
            accumsan in nisl. Sit amet dictum sit amet justo donec. Massa ultricies mi quis
            hendrerit. Integer feugiat scelerisque varius morbi enim nunc. Venenatis a condimentum
            vitae sapien pellentesque habitant morbi tristique senectus. Suspendisse ultrices
            gravida dictum fusce ut. Aliquet eget sit amet tellus cras adipiscing enim. A erat nam
            at lectus urna. Varius vel pharetra vel turpis nunc eget lorem dolor. Lacus vestibulum
            sed arcu non. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Lacus
            vestibulum sed arcu non odio euismod lacinia at. Sollicitudin nibh sit amet commodo
            nulla facilisi nullam. Enim lobortis scelerisque fermentum dui faucibus in ornare. Sit
            amet nisl suscipit adipiscing bibendum est ultricies. Eget mauris pharetra et ultrices
            neque ornare. Sed libero enim sed faucibus turpis in. Urna neque viverra justo nec
            ultrices dui sapien eget mi. Id neque aliquam vestibulum morbi. Sit amet facilisis magna
            etiam tempor orci. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.
            Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Tellus integer
            feugiat scelerisque varius morbi enim nunc. Semper risus in hendrerit gravida rutrum. Mi
            sit amet mauris commodo quis imperdiet massa. Hac habitasse platea dictumst quisque.
            Magna sit amet purus gravida quis blandit turpis cursus in. Viverra mauris in aliquam
            sem. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. At urna
            condimentum mattis pellentesque id nibh tortor id. Ut placerat orci nulla pellentesque
            dignissim enim sit. Convallis a cras semper auctor neque vitae tempus. Nibh nisl
            condimentum id venenatis a condimentum vitae. Morbi tincidunt augue interdum velit
            euismod in pellentesque massa placerat. Sit amet aliquam id diam maecenas. Pulvinar
            mattis nunc sed blandit libero volutpat sed cras ornare. Integer malesuada nunc vel
            risus. Sit amet consectetur adipiscing elit. Mauris augue neque gravida in. Vel quam
            elementum pulvinar etiam non quam. Elementum eu facilisis sed odio morbi quis commodo
            odio. Pellentesque elit eget gravida cum sociis natoque. Curabitur gravida arcu ac
            tortor dignissim convallis aenean et tortor. Pretium quam vulputate dignissim
            suspendisse in est ante in nibh. Ac auctor augue mauris augue neque gravida in
            fermentum. Maecenas pharetra convallis posuere morbi. Eget duis at tellus at urna.
            Tristique risus nec feugiat in fermentum posuere. Libero id faucibus nisl tincidunt.
            Fames ac turpis egestas maecenas pharetra convallis posuere. Ut tristique et egestas
            quis ipsum. Senectus et netus et malesuada fames. Vulputate ut pharetra sit amet aliquam
            id diam maecenas ultricies. Risus viverra adipiscing at in tellus integer feugiat.
            Egestas congue quisque egestas diam in arcu cursus euismod. Felis bibendum ut tristique
            et egestas quis ipsum. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Sed
            libero enim sed faucibus turpis in eu mi. Pretium viverra suspendisse potenti nullam ac.
            A diam sollicitudin tempor id. Est ullamcorper eget nulla facilisi etiam dignissim diam.
            Id ornare arcu odio ut sem nulla pharetra diam sit. Morbi tristique senectus et netus et
            malesuada. Molestie nunc non blandit massa enim. Tempus imperdiet nulla malesuada
            pellentesque elit eget. Turpis massa sed elementum tempus egestas sed sed risus pretium.
            Diam sit amet nisl suscipit adipiscing bibendum. Lacus suspendisse faucibus interdum
            posuere lorem ipsum dolor sit amet. Elit eget gravida cum sociis natoque penatibus et.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Fringilla
            phasellus faucibus scelerisque eleifend donec pretium. Quam quisque id diam vel quam
            elementum. Vulputate dignissim suspendisse in est ante. Enim praesent elementum
            facilisis leo vel. Libero nunc consequat interdum varius. A lacus vestibulum sed arcu
            non odio euismod lacinia. Nulla facilisi morbi tempus iaculis urna id volutpat. Purus
            non enim praesent elementum facilisis. Rhoncus mattis rhoncus urna neque viverra justo
            nec ultrices dui. Etiam tempor orci eu lobortis elementum nibh tellus. Integer vitae
            justo eget magna fermentum. Duis at consectetur lorem donec massa sapien faucibus et
            molestie. Purus semper eget duis at. Mauris ultrices eros in cursus turpis massa
            tincidunt. Mi proin sed libero enim sed faucibus turpis. Nunc id cursus metus aliquam
            eleifend mi in nulla posuere. Varius sit amet mattis vulputate enim nulla. Enim ut
            tellus elementum sagittis. Porttitor massa id neque aliquam vestibulum morbi. Vitae
            aliquet nec ullamcorper sit amet risus nullam eget felis. Lectus urna duis convallis
            convallis tellus. Massa tincidunt nunc pulvinar sapien et ligula. Amet est placerat in
            egestas erat imperdiet. Fusce id velit ut tortor pretium viverra suspendisse. Felis eget
            velit aliquet sagittis id consectetur purus ut. Nunc consequat interdum varius sit amet
            mattis vulputate. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet.
            Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Leo a diam
            sollicitudin tempor id eu nisl nunc. At augue eget arcu dictum. In cursus turpis massa
            tincidunt. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
            Placerat vestibulum lectus mauris ultrices eros. Tincidunt ornare massa eget egestas.
            Volutpat est velit egestas dui id. Aliquet bibendum enim facilisis gravida neque
            convallis a. Non blandit massa enim nec dui nunc mattis enim. Et sollicitudin ac orci
            phasellus egestas. Diam quam nulla porttitor massa id. Aliquam id diam maecenas
            ultricies mi eget mauris pharetra et. Vulputate ut pharetra sit amet aliquam id. Integer
            enim neque volutpat ac. Leo urna molestie at elementum eu facilisis sed odio morbi.
            Euismod nisi porta lorem mollis aliquam ut porttitor. Praesent elementum facilisis leo
            vel. Vitae suscipit tellus mauris a diam maecenas sed. Erat pellentesque adipiscing
            commodo elit at imperdiet dui. Mus mauris vitae ultricies leo integer malesuada nunc vel
            risus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sit amet dictum sit
            amet justo donec enim diam. Montes nascetur ridiculus mus mauris vitae. Diam phasellus
            vestibulum lorem sed risus ultricies tristique. Ultricies integer quis auctor elit sed
            vulputate mi sit. Ac felis donec et odio pellentesque diam. Eget velit aliquet sagittis
            id consectetur purus ut faucibus. Cursus sit amet dictum sit amet. Viverra justo nec
            ultrices dui sapien eget. In aliquam sem fringilla ut morbi tincidunt augue. Bibendum
            arcu vitae elementum curabitur vitae nunc. Convallis a cras semper auctor. Leo urna
            molestie at elementum eu facilisis. Dui vivamus arcu felis bibendum. Egestas sed sed
            risus pretium quam vulputate dignissim. Ut consequat semper viverra nam libero justo.
            Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Sit
            amet porttitor eget dolor morbi non. A arcu cursus vitae congue mauris rhoncus. Leo urna
            molestie at elementum. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Diam vel
            quam elementum pulvinar etiam non. Libero enim sed faucibus turpis in eu. Suscipit
            tellus mauris a diam. Adipiscing vitae proin sagittis nisl rhoncus. Cursus turpis massa
            tincidunt dui ut ornare lectus sit. Ipsum dolor sit amet consectetur adipiscing elit.
            Scelerisque eu ultrices vitae auctor eu augue ut lectus. Posuere lorem ipsum dolor sit.
            Congue eu consequat ac felis donec et odio pellentesque diam. Nibh nisl condimentum id
            venenatis a. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in.
            Nec nam aliquam sem et tortor consequat id porta nibh. Magna fermentum iaculis eu non
            diam phasellus vestibulum lorem. Diam donec adipiscing tristique risus nec feugiat.
            Egestas maecenas pharetra convallis posuere. Venenatis cras sed felis eget velit aliquet
            sagittis id. Faucibus vitae aliquet nec ullamcorper sit amet. Vitae aliquet nec
            ullamcorper sit amet risus nullam. Sed cras ornare arcu dui vivamus arcu felis. Massa
            enim nec dui nunc mattis enim ut tellus elementum. Viverra aliquet eget sit amet tellus
            cras. Risus at ultrices mi tempus imperdiet. Vitae aliquet nec ullamcorper sit. Sed
            tempus urna et pharetra pharetra massa. Quisque non tellus orci ac auctor augue mauris
            augue neque. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim.
            Pellentesque elit eget gravida cum sociis natoque penatibus. Pretium vulputate sapien
            nec sagittis aliquam malesuada bibendum. Nunc mattis enim ut tellus elementum sagittis.
            Sed ullamcorper morbi tincidunt ornare. Consectetur adipiscing elit pellentesque
            habitant morbi. Eu scelerisque felis imperdiet proin. Hac habitasse platea dictumst
            quisque sagittis. Nunc sed id semper risus in hendrerit gravida rutrum. Nullam ac tortor
            vitae purus faucibus ornare suspendisse. Nec ullamcorper sit amet risus. Consectetur
            lorem donec massa sapien faucibus. Non enim praesent elementum facilisis leo vel
            fringilla est ullamcorper. Turpis tincidunt id aliquet risus. Tortor dignissim convallis
            aenean et tortor. Ridiculus mus mauris vitae ultricies leo. Id nibh tortor id aliquet
            lectus proin nibh nisl condimentum. Egestas sed sed risus pretium. Nulla malesuada
            pellentesque elit eget gravida. Eros donec ac odio tempor orci dapibus ultrices. A
            condimentum vitae sapien pellentesque habitant morbi. Suscipit tellus mauris a diam.
            Neque ornare aenean euismod elementum. Odio tempor orci dapibus ultrices in iaculis
            nunc. Curabitur vitae nunc sed velit dignissim. Placerat orci nulla pellentesque
            dignissim enim sit. Enim tortor at auctor urna nunc id cursus metus. Proin libero nunc
            consequat interdum varius. Sit amet tellus cras adipiscing. Arcu odio ut sem nulla
            pharetra. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et.
            Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Vitae tempus
            quam pellentesque nec nam aliquam. Arcu non sodales neque sodales ut etiam sit. Sit amet
            mattis vulputate enim nulla aliquet. Senectus et netus et malesuada fames ac turpis
            egestas. Quis varius quam quisque id diam vel quam elementum pulvinar. Dolor sit amet
            consectetur adipiscing elit duis tristique sollicitudin nibh. Nunc pulvinar sapien et
            ligula ullamcorper malesuada proin libero. Neque sodales ut etiam sit amet nisl purus in
            mollis. Pellentesque nec nam aliquam sem et tortor consequat id. Viverra tellus in hac
            habitasse platea dictumst vestibulum rhoncus est. Malesuada nunc vel risus commodo
            viverra maecenas accumsan lacus vel. Fames ac turpis egestas maecenas. Ac orci phasellus
            egestas tellus rutrum tellus pellentesque eu. At tellus at urna condimentum. Purus sit
            amet volutpat consequat mauris nunc congue. Viverra adipiscing at in tellus integer.
            Donec ac odio tempor orci. In eu mi bibendum neque egestas. Vitae nunc sed velit
            dignissim sodales. Egestas quis ipsum suspendisse ultrices. Justo donec enim diam
            vulputate ut. A lacus vestibulum sed arcu. Nulla facilisi etiam dignissim diam. Praesent
            elementum facilisis leo vel fringilla est ullamcorper eget. Mauris cursus mattis
            molestie a. Arcu felis bibendum ut tristique et egestas quis ipsum. Sodales ut eu sem
            integer vitae justo. Integer enim neque volutpat ac. Sed cras ornare arcu dui vivamus
            arcu felis bibendum. Sed turpis tincidunt id aliquet risus. Nisi scelerisque eu ultrices
            vitae auctor eu augue. Lobortis scelerisque fermentum dui faucibus. Suspendisse in est
            ante in nibh mauris cursus mattis molestie. Dis parturient montes nascetur ridiculus mus
            mauris vitae ultricies leo. Est lorem ipsum dolor sit amet consectetur adipiscing elit.
            Dolor sit amet consectetur adipiscing elit duis tristique. Elit pellentesque habitant
            morbi tristique senectus. Ut aliquam purus sit amet luctus venenatis. Bibendum enim
            facilisis gravida neque convallis a cras semper. Augue lacus viverra vitae congue eu
            consequat ac felis donec. Curabitur vitae nunc sed velit dignissim sodales ut. Molestie
            nunc non blandit massa enim. Aliquam malesuada bibendum arcu vitae elementum. At lectus
            urna duis convallis convallis. Euismod lacinia at quis risus. Eu turpis egestas pretium
            aenean. Egestas egestas fringilla phasellus faucibus. Ullamcorper morbi tincidunt ornare
            massa eget egestas. At in tellus integer feugiat scelerisque varius morbi enim. At
            tempor commodo ullamcorper a. Posuere urna nec tincidunt praesent semper feugiat nibh
            sed pulvinar. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nibh
            tortor id aliquet lectus proin nibh nisl. Vivamus at augue eget arcu dictum varius duis
            at. Amet tellus cras adipiscing enim eu turpis egestas pretium. Etiam sit amet nisl
            purus in mollis nunc sed. Quis commodo odio aenean sed adipiscing diam donec. Massa
            tempor nec feugiat nisl pretium. Ullamcorper eget nulla facilisi etiam dignissim diam.
            Id semper risus in hendrerit gravida rutrum quisque. Auctor augue mauris augue neque
            gravida in. A scelerisque purus semper eget duis. Lobortis mattis aliquam faucibus purus
            in massa tempor nec. Rutrum quisque non tellus orci. Viverra justo nec ultrices dui
            sapien eget mi proin. Porttitor eget dolor morbi non. Commodo elit at imperdiet dui
            accumsan. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Aliquet enim tortor at
            auctor urna. Eget felis eget nunc lobortis. Tincidunt arcu non sodales neque. Sit amet
            porttitor eget dolor morbi non arcu risus quis. Egestas sed sed risus pretium quam
            vulputate dignissim suspendisse. Malesuada proin libero nunc consequat interdum varius
            sit amet. Sit amet risus nullam eget felis. Curabitur vitae nunc sed velit dignissim.
            Aliquam ultrices sagittis orci a scelerisque purus semper. Magna fermentum iaculis eu
            non diam phasellus vestibulum. Ut pharetra sit amet aliquam id diam. Duis tristique
            sollicitudin nibh sit amet commodo nulla facilisi. Orci phasellus egestas tellus rutrum
            tellus pellentesque eu tincidunt. Sit amet consectetur adipiscing elit ut aliquam purus
            sit amet. Sit amet tellus cras adipiscing enim. Blandit volutpat maecenas volutpat
            blandit. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum.
            Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Sed vulputate mi sit
            amet mauris commodo quis. Nulla facilisi morbi tempus iaculis urna id volutpat lacus.
            Quisque egestas diam in arcu cursus euismod quis. Sed risus pretium quam vulputate.
            Pellentesque eu tincidunt tortor aliquam nulla. At consectetur lorem donec massa sapien
            faucibus. Arcu ac tortor dignissim convallis aenean et tortor. Duis at consectetur lorem
            donec. Hac habitasse platea dictumst quisque sagittis purus. Libero volutpat sed cras
            ornare arcu dui vivamus arcu. Malesuada proin libero nunc consequat interdum varius.
            Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Ac tincidunt vitae
            semper quis lectus nulla at volutpat. Vehicula ipsum a arcu cursus vitae congue mauris
            rhoncus. Vitae purus faucibus ornare suspendisse sed. Lobortis feugiat vivamus at augue
            eget arcu dictum varius duis. Arcu dui vivamus arcu felis bibendum ut tristique et
            egestas. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Nisi quis
            eleifend quam adipiscing vitae. Nisi scelerisque eu ultrices vitae. Lacus vestibulum sed
            arcu non odio. Augue ut lectus arcu bibendum at varius vel pharetra vel. Lacus sed
            viverra tellus in hac habitasse. Amet massa vitae tortor condimentum lacinia. Mi
            bibendum neque egestas congue. Aenean sed adipiscing diam donec adipiscing tristique
            risus. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Nisl vel
            pretium lectus quam id. Amet purus gravida quis blandit turpis cursus in hac habitasse.
            Nibh sit amet commodo nulla facilisi nullam vehicula. Sagittis eu volutpat odio
            facilisis mauris sit. Sagittis aliquam malesuada bibendum arcu vitae. Nisl rhoncus
            mattis rhoncus urna neque viverra. Tortor dignissim convallis aenean et tortor at risus
            viverra. Amet consectetur adipiscing elit pellentesque. Sit amet luctus venenatis lectus
            magna fringilla urna porttitor. Tempus quam pellentesque nec nam aliquam sem et tortor.
            Mattis molestie a iaculis at erat. Sed ullamcorper morbi tincidunt ornare massa eget
            egestas purus. Adipiscing elit pellentesque habitant morbi. Diam phasellus vestibulum
            lorem sed risus ultricies tristique nulla aliquet. Sit amet porttitor eget dolor. Sit
            amet consectetur adipiscing elit ut aliquam. Sed vulputate mi sit amet mauris commodo
            quis. Mattis molestie a iaculis at. Laoreet id donec ultrices tincidunt arcu non sodales
            neque. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Tempus
            iaculis urna id volutpat lacus laoreet non curabitur.
          </p>
        </div>
      </main>
      {/* End second column */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = (context) => getAuthServerSideProps(context);
