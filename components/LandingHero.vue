<template>
  <section id="landing-hero" class="hero is-medium">
    <div v-if="lang === 'english'" class="hero-body">
      <div class="welcome-message">
        <p>
          <strong><em>ti-civara:</em> three robes</strong>
        </p>
        <p>
          This is a size calculating tool and instruction guide for sewing the robes of a buddhist
          monk.
        </p>
        <p>Enjoy your work!</p>
      </div>
      <div class="landing-logo">
        <img src="/img/logo-as-path.svg" />
      </div>
    </div>

    <div v-if="lang === 'thai'" class="hero-body">
      <div class="welcome-message">
        <p>
          <strong>ไตรจีวร</strong>
        </p>
        <p>
          คือผ้า 3 ผืนที่เป็นหนึ่งในบริขาร 8 อย่าง "อัฏฐบริขาร" ที่พระภิกษุจำเป็นต้องมี
          ประกอบด้วยผ้าสามผืน อันได้แก่ ผ้าสบง "อันตรวาสก" ผ้าจีวร "อุตตราสงค์" และผ้าห่มซ้อน
          "สังฆาฏิ"
        </p>
        <p>
          ในสมัยต้นพุทธกาลผ้าที่นำมาทำเป็นไตรจีวรยังมีการใช้ผ้าทั้งผืน
          หรือนำเก็บผ้ามาต่อกันอย่างไม่มีรูปแบบ
          เมื่อมีการลักขโมยผ้าของพระบ่อยครั้งเนื่องจากผ้าในสมัยนั้นหายาก
          พระพุทธองค์จึงโปรดให้พระอานนท์ออกแบบทำผ้าเป็นลายคันนาเพื่อทำลายราคาของผ้า
          จึงเกิดเป็นจีวรขันธ์สืบทอดมาถึงทุกวันนี้
        </p>
        <p>
          การตัดเย็บจีวรเป็นภูมิปัญญาจากวัด ซึ่งสืบทอดกันต่อๆ
          มาโดยเฉพาะพระสายวัดป่าจะฝึกให้สามเณรตัดเย็บไตรจีวรของตนเองเพื่อใช้ในการบวช
        </p>
        <p>
          การคำนวณที่ใช้ในเว็บนี้เป็นเพียงหนึ่งของวิธีที่หลากหลายในการตัดเย็บ
          หากมีข้อสงสัยสามารถสอบถามได้ที่ ratanawanno@gmail.com
        </p>
      </div>
      <div class="landing-logo">
        <img src="/img/logo-as-path.svg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  }
};
</script>
