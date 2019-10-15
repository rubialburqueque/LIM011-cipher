eslint-disable indent
window.onload = () => {
  /* activado y desactivado de los enlaces de cada pestaña */

  const linkActive = document.getElementById('link-encode')
  const linkDesactive = document.getElementById('link-decode')

  linkActive.addEventListener('click', function () {
    document.getElementById('link-encode').classList.add('link_active')
    document.getElementById('link-decode').classList.remove('link_active')
    document.getElementById('content-msg-encode').classList.remove('display_none')

    document.getElementById('content-msg-encode').classList.add('display_block')
    document.getElementById('content-msg-decode').classList.remove('display_block')
        document.getElementById('content-msg-decode').classList.add('display_none')
    })

    linkDesactive.addEventListener('click', function () {
        document.getElementById('link-encode').classList.remove('link_active')
        document.getElementById('link-decode').classList.add('link_active')
        document.getElementById('content-msg-decode').classList.remove('display_none')
        document.getElementById('content-msg-decode').classList.add('display_block')
        document.getElementById('content-msg-encode').classList.remove('display_block')
        document.getElementById('content-msg-encode').classList.add('display_none')
    })

    /* rescatando el valor del texto a codificar */

    const btnTextEncode = document.getElementById('btn_encode')
    btnTextEncode.addEventListener('click', function () {
        const textEncode = document.getElementById('box-msg-encode').value
        // textEncode = textEncode.toUpperCase();
        const number_offset = document.getElementById('n_offset_e').value
        document.getElementById('msg-encode-check').innerHTML = window.cipher.encode(textEncode.toUpperCase(), number_offset)
    })

    /* rescatando el valor del texto a decodificar */

    const btnTextDecode = document.getElementById('btn_decode')
    btnTextDecode.addEventListener('click', function () {
        const textDecode = document.getElementById('box-msg-decode').value
        // textDecode = textDecode.toUpperCase();
        const number_offset = document.getElementById('n_offset_d').value
        document.getElementById('msg-decode-check').innerHTML = window.cipher.decode(textDecode.toUpperCase(), number_offset)
    })

    // boton para que salga el link de descarga//

      // 1//
 const btn1 = document.getElementById('btn1')
 document.getElementById('btn1').addEventListener('click', () => {
   alert('Nº decodificación: 4')
    document.getElementById('box-msg-decode').innerHTML = 'LXXTW://HVMZI.KSSKPI.GSQ/YG?IBTSVX=HSARPSEH&GSRJMVQ=RS_ERXMZMVYW&MH=1VTFVQJD5DOZRJTPGYPSDDYHLV-Z9CDTB'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
 })

     // 2//
 const btn2 = document.getElementById('btn2')
 btn2.addEventListener('click', () => {
   alert('Nº decodificación: 53')
    document.getElementById('box-msg-decode').innerHTML = 'IUUQT://ESJWF.HPPHMF.DPN/VD?FYQPSU=EPXOMPBE&DPOGJSN=OP_BOUJWJSVT&JE=1MIYWRUE6HHN4KIGGY_Z_HLK9IMKJUBPN'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
 })

    // 3//
 const btn3 = document.getElementById('btn3')
 btn3.addEventListener('click', () => {
   alert('Nº decodificación: 8')
   document.getElementById('box-msg-decode').innerHTML = 'PBBXA://LZQDM.OWWOTM.KWU/CK?MFXWZB=LWEVTWIL&KWVNQZU=VW_IVBQDQZCA&QL=1LI0GU16VR8P-9JUHRUZPQMF-KNPH2J7H'
   document.getElementById('buscador').style.display = 'none'
   document.getElementById('galeria').style.display = 'none'
   document.getElementById('boton').style.display = 'none'
   document.getElementById('decode').style.display = 'block'
 })

    // 4//
 const btn4 = document.getElementById('btn4')
 btn4.addEventListener('click', () => {
   alert('Nº decodificación: 285')
   document.getElementById('box-msg-decode').innerHTML = 'GSSOR://CQHUD.FNNFKD.BNL/TB?DWONQS=CNVMKNZC&BNMEHQL=MN_ZMSHUHQTR&HC=1JSPWXJTKX07LJOKQYOBS5_U80MDZAOI4'
   document.getElementById('buscador').style.display = 'none'
   document.getElementById('galeria').style.display = 'none'
   document.getElementById('boton').style.display = 'none'
   document.getElementById('decode').style.display = 'block'
 })

    // 5//
 const btn5 = document.getElementById('btn5')
 btn5.addEventListener('click', () => {
   alert('Nº decodificación: 125')
   document.getElementById('box-msg-decode').innerHTML = 'COOKN://YMDQZ.BJJBGZ.XJH/PX?ZSKJMO=YJRIGJVY&XJIADMH=IJ_VIODQDMPN&DY=19XK9VW3MMJ3MK5QZMCHC4KRCUAJW1VNA/QDZR?PNK=NCVMDIB'
   document.getElementById('buscador').style.display = 'none'
   document.getElementById('galeria').style.display = 'none'
   document.getElementById('boton').style.display = 'none'
   document.getElementById('decode').style.display = 'block'
 })

    // 6//
 const btn6 = document.getElementById('btn6')
 btn6.addEventListener('click', () => {
   alert('Nº decodificación: 7')
   document.getElementById('box-msg-decode').innerHTML = 'OAAWZ://KYPCL.NVVNSL.JVT/BJ?LEWVYA=KVDUSVHK&JVUMPYT=UV_HUAPCPYBZ&PK=1IOS9KNQN8XI1HX2CB14OPKRTHMWQX0AO'
   document.getElementById('buscador').style.display = 'none'
   document.getElementById('galeria').style.display = 'none'
   document.getElementById('boton').style.display = 'none'
   document.getElementById('decode').style.display = 'block'
 })

    // 7//
 const btn7 = document.getElementById('btn7')
 btn7.addEventListener('click', () => {
   alert('Nº decodificación: 1')
   document.getElementById('box-msg-decode').innerHTML = 'IUUQT://ESJWF.HPPHMF.DPN/VD?FYQPSU=EPXOMPBE&DPOGJSN=OP_BOUJWJSVT&JE=19YMV_WUFHQVRCU2PKIMPAJUYTREWLNBW'
   document.getElementById('buscador').style.display = 'none'
   document.getElementById('galeria').style.display = 'none'
   document.getElementById('boton').style.display = 'none'
   document.getElementById('decode').style.display = 'block'
 })

    // 8//
 const btn8 = document.getElementById('btn8')
 btn8.addEventListener('click', () => {
   alert('Nº decodificación: 5')
   document.getElementById('box-msg-decode').innerHTML = 'MYYUX://IWNAJ.LTTLQJ.HTR/ZH?JCUTWY=ITBSQTFI&HTSKNWR=ST_FSYNANWZX&NI=1PFQ9I2I2VNH-ZGYLD1AR7VMAKKGVJ9R0'
   document.getElementById('buscador').style.display = 'none'
   document.getElementById('galeria').style.display = 'none'
   document.getElementById('boton').style.display = 'none'
   document.getElementById('decode').style.display = 'block'
 })

    // 9//
 const btn9 = document.getElementById('btn9')

 btn9.addEventListener('click', () => {
   alert('Nº decodificación: 90')
   document.getElementById('box-msg-decode').innerHTML = 'TFFBE://PDUHQ.SAASXQ.OAY/GO?QJBADF=PAIZXAMP&OAZRUDY=ZA_MZFUHUDGE&UP=1YJ_GLNCH6JHQPZNIWBTM2Z_WUSC_4UZR'
   document.getElementById('buscador').style.display = 'none'
   document.getElementById('galeria').style.display = 'none'
   document.getElementById('boton').style.display = 'none'
   document.getElementById('decode').style.display = 'block'
 })

 const loginbtn = document.getElementById('login')
loginbtn.addEventListener('click', () => {
  const nombreUsuario = document.getElementById('username')
  const codigo = document.getElementById('password')

  if (nombreUsuario.value === 'rubi' && codigo.value === '12345') {
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'none'
    document.getElementById('login-diseño').style.display = 'none'
    document.getElementById('encode').style.display = 'block'
  } else {
      alert('Porfavor ingrese nombre de usuario y contraseña correctos')
    }
})

const proveedor = document.getElementById('boton')
proveedor.addEventListener('click', () => {
document.getElementById('buscador').style.display = 'none'
document.getElementById('galeria').style.display = 'none'
document.getElementById('boton').style.display = 'none'
document.getElementById('login-diseño').style.display = 'block'
})

const volver = document.getElementById('volver')
proveedor.addEventListener('click', () => {
document.getElementById('boton').style.display = 'none'
document.getElementById('login-diseño').style.display = 'none'
document.getElementById('boton').style.display = 'none'
document.getElementById('decode').style.display = 'none'
document.getElementById('encode').style.display = 'none'
document.getElementById('buscador').style.display = 'block'
document.getElementById('galeria').style.display = 'block'
})
