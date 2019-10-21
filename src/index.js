// eslint-disable indent//
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
    // eslint-disable-next-line camelcase
    const number_offset = document.getElementById('n_offset_e').value
    document.getElementById('msg-encode-check').innerHTML = window.cipher.encode(textEncode, number_offset)
  })

  /* rescatando el valor del texto a decodificar */

  const btnTextDecode = document.getElementById('btn_decode')
  btnTextDecode.addEventListener('click', function () {
    const textDecode = document.getElementById('box-msg-decode').value
    // textDecode = textDecode.toUpperCase();
    // eslint-disable-next-line camelcase
    const number_offset = document.getElementById('n_offset_d').value
    document.getElementById('msg-decode-check').innerHTML = window.cipher.decode(textDecode, number_offset)
  })

  // boton para que salga el link de descarga//

  // 1//
  // eslint-disable-next-line no-unused-vars
  const btn1 = document.getElementById('btn1')
  document.getElementById('btn1').addEventListener('click', () => {
    alert('Nº decodificación: 4')
    document.getElementById('box-msg-decode').innerHTML = 'lxxtw://hvmzi.ksskpi.gsq/stir?mh=1qb_yDFUZ6BZiHRfaoTlE2R_oMKU_4MRj'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
  })

  // 2//
  const btn2 = document.getElementById('btn2')
  btn2.addEventListener('click', () => {
    alert('Nº decodificación: 53')
    document.getElementById('box-msg-decode').innerHTML = 'iuuqt://esjwf.hpphmf.dpn/vd?fyqpsu=epxompbe&dpogjsn=op_boujwjsvt&je=1MIYwruE6hHN4KiggY_z_HLk9imkjuBPn'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
  })

  // 3//
  const btn3 = document.getElementById('btn3')
  btn3.addEventListener('click', () => {
    alert('Nº decodificación: 8')
    document.getElementById('box-msg-decode').innerHTML = 'pbbxa://lzqdm.owwotm.kwu/ck?mfxwzb=lwevtwil&kwvnqzu=vw_ivbqdqzca&ql=1lI0gu16VR8P-9jUhruzpqMF-knPh2j7h'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
  })

  // 4//
  const btn4 = document.getElementById('btn4')
  btn4.addEventListener('click', () => {
    alert('Nº decodificación: 285')
    document.getElementById('box-msg-decode').innerHTML = 'gssor://cqhud.fnnfkd.bnl/tb?dwonqs=cnvmknzc&bnmehql=mn_zmshuhqtr&hc=1jspwXjTKx07lJOKqYOBs5_u80mdZAoI4'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
  })

  // 5//
  const btn5 = document.getElementById('btn5')
  btn5.addEventListener('click', () => {
    alert('Nº decodificación: 125')
    document.getElementById('box-msg-decode').innerHTML = 'cookn://ymdqz.bjjbgz.xjh/px?zskjmo=yjrigjvy&xjiadmh=ij_viodqdmpn&dy=1YpWV-G0nTr6gqqDvfcH8kUV2LDXITnUu'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
  })

  // 6//
  const btn6 = document.getElementById('btn6')
  btn6.addEventListener('click', () => {
    alert('Nº decodificación: 7')
    document.getElementById('box-msg-decode').innerHTML = 'oaawz://kypcl.nvvnsl.jvt/bj?lewvya=kvdusvhk&jvumpyt=uv_huapcpybz&pk=1IOS9knQn8xi1hx2cb14opKrtHMWQX0Ao'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
  })

  // 7//
  const btn7 = document.getElementById('btn7')
  btn7.addEventListener('click', () => {
    alert('Nº decodificación: 1')
    document.getElementById('box-msg-decode').innerHTML = 'iuuqt://esjwf.hpphmf.dpn/vd?fyqpsu=epxompbe&dpogjsn=op_boujwjsvt&je=19YmV_WUFhQvRcu2PKIMpajuyTrEwlNbw'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
  })

  // 8//
  const btn8 = document.getElementById('btn8')
  btn8.addEventListener('click', () => {
    alert('Nº decodificación: 5')
    document.getElementById('box-msg-decode').innerHTML = 'myyux://iwnaj.lttlqj.htr/zh?jcutwy=itbsqtfi&htsknwr=st_fsynanwzx&ni=ni=1PfQ9I2i2vnh-zGYlD1aR7vMAKkGVj9r0'
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('decode').style.display = 'block'
  })

  // 9//
  const btn9 = document.getElementById('btn9')

  btn9.addEventListener('click', () => {
    alert('Nº decodificación: 90')
    document.getElementById('box-msg-decode').innerHTML = 'tffbe://pduhq.saasxq.oay/go?qjbadf=paizxamp&oazrudy=za_mzfuhudge&up=up=1yj_gLNCH6JHqPZniwBtM2Z_wUSC_4UZr'
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
  }
  )

  const proveedor = document.getElementById('boton')
  proveedor.addEventListener('click', () => {
    document.getElementById('buscador').style.display = 'none'
    document.getElementById('galeria').style.display = 'none'
    document.getElementById('boton').style.display = 'none'
    document.getElementById('login-diseño').style.display = 'block'
  })
}
