export const otpVerification = (otp) => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-50 {
          width: 300px !important;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
    </style>

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #f9f9f9;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #f9f9f9;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: #f9f9f9"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f9f9f9;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 15px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  height="0px"
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    border-spacing: 0;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    vertical-align: top;
                                    border-top: 1px solid #f9f9f9;
                                    -ms-text-size-adjust: 100%;
                                    -webkit-text-size-adjust: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="
                                          word-break: break-word;
                                          border-collapse: collapse !important;
                                          vertical-align: top;
                                          font-size: 0px;
                                          line-height: 0px;
                                          mso-line-height-rule: exactly;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                      >
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 25px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    >
                                      <svg
                                        height="30"
                                        width="160"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:svgjs="http://svgjs.dev/svgjs"
                                        width="2000"
                                        height="303"
                                        viewBox="0 0 2000 303"
                                      >
                                        <g
                                          transform="matrix(1,0,0,1,-1.2121212121212466,-0.8084255287817541)"
                                        >
                                          <svg
                                            viewBox="0 0 396 60"
                                            data-background-color="#ffffff"
                                            preserveAspectRatio="xMidYMid meet"
                                            height="303"
                                            width="2000"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                          >
                                            <g
                                              id="tight-bounds"
                                              transform="matrix(1,0,0,1,0.2400000000000091,0.16008426312509982)"
                                            >
                                              <svg
                                                viewBox="0 0 395.52 59.67983147374983"
                                                height="59.67983147374983"
                                                width="395.52"
                                              >
                                                <g>
                                                  <svg
                                                    viewBox="0 0 489.7981742838186 73.90542196958091"
                                                    height="59.67983147374983"
                                                    width="395.52"
                                                  >
                                                    <g
                                                      transform="matrix(1,0,0,1,0,15.378353241693222)"
                                                    >
                                                      <svg
                                                        viewBox="0 0 395.52 43.14871548619447"
                                                        height="43.14871548619447"
                                                        width="395.52"
                                                      >
                                                        <g
                                                          id="textblocktransform"
                                                        >
                                                          <svg
                                                            viewBox="0 0 395.52 43.14871548619447"
                                                            height="43.14871548619447"
                                                            width="395.52"
                                                            id="textblock"
                                                          >
                                                            <g>
                                                              <svg
                                                                viewBox="0 0 395.52 43.14871548619447"
                                                                height="43.14871548619447"
                                                                width="395.52"
                                                              >
                                                                <g
                                                                  transform="matrix(1,0,0,1,0,0)"
                                                                >
                                                                  <svg
                                                                    width="395.52"
                                                                    viewBox="-1.35 -35.75 331.23 36.35"
                                                                    height="43.14871548619447"
                                                                    data-palette-color="#636365"
                                                                  >
                                                                    <g
                                                                      class="undefined-text-0"
                                                                      data-fill-palette-color="primary"
                                                                      id="text-0"
                                                                    >
                                                                      <path
                                                                        d="M19.95-11.8L19.95-11.8Q18.05-11.85 14.7-11.85 11.35-11.85 9.3-11.8L9.3-11.8Q7.65-6.1 7.35-4.78 7.05-3.45 7.05-1.1L7.05-1.1 7.05 0-1.35 0-1.35-1.1Q1.25-2.9 5.1-14.4 8.95-25.9 10.15-29.63 11.35-33.35 11.55-35L11.55-35 19.25-35.75Q19.25-33.85 22.55-24.85L22.55-24.85Q28.7-8.05 31.1-4.2L31.1-4.2Q32.25-2.25 33.7-1.1L33.7-1.1 33.7 0 23.1 0 23.1-1.1Q23.1-3.2 19.95-11.8ZM14.4-28.7L14.4-28.7Q12.75-23.95 10.25-15.45L10.25-15.45 18.9-15.45Q18.6-16.3 18-18.3L18-18.3Q16.7-22.75 14.4-28.7ZM67.5-13.2L66.35-13.2Q66.35-6.6 66.65-4.15L66.65-4.15Q63.75-2.35 59.67-0.88 55.6 0.6 51.75 0.6L51.75 0.6Q44.5 0.6 39.55-4.25 34.6-9.1 34.6-16.82 34.6-24.55 40-30.08 45.4-35.6 53.45-35.6L53.45-35.6Q60.6-35.6 66.7-31.2L66.7-31.2Q64.55-28.85 60.4-26.5L60.4-26.5Q58.85-28.6 56.15-30.05 53.45-31.5 50.67-31.5 47.9-31.5 46.8-31.2L46.8-31.2Q42.15-27.2 42.15-18.35L42.15-18.35Q42.15-11.1 44.8-7.43 47.45-3.75 53.5-3.75L53.5-3.75Q56.55-3.75 58.95-4.55L58.95-4.55Q59.65-8.2 59.65-13.05L59.65-13.05 53-13.05 55.55-17.05Q60.35-16.7 63.7-16.7 67.05-16.7 69.25-16.8L69.25-16.8 67.5-13.2ZM80.85-34.9L80.85-34.9 88-35Q94.45-35 97.97-33.05 101.5-31.1 101.5-26.48 101.5-21.85 98.65-19.05 95.8-16.25 91.05-15.8L91.05-15.8 96.75-9.15Q100.4-4.9 102.37-3.3 104.35-1.7 105.95-1.2L105.95-1.2 105.95 0 97.2 0Q96.5-1.05 93.75-4.55L93.75-4.55 84.75-15.5Q84.15-15.5 83.9-15.55L83.9-15.55 83.9-8.6Q83.9-3.7 84.7-1.1L84.7-1.1 84.7 0 75.8 0 75.8-1.1Q76.8-3.7 76.8-8.1L76.8-8.1 76.8-26.05Q76.8-31.05 75.95-33.9L75.95-33.9 75.95-35Q77.35-34.9 80.85-34.9ZM94.1-25.6Q94.1-29.1 92.57-30.43 91.05-31.75 87.82-31.75 84.6-31.75 84-31.7L84-31.7Q83.9-30.2 83.9-18.7L83.9-18.7Q85.05-18.55 86.75-18.55L86.75-18.55Q90.75-18.55 92.42-20.33 94.1-22.1 94.1-25.6ZM125.74 0.6Q117.74 0.6 112.97-4.45 108.19-9.5 108.19-17.23 108.19-24.95 113.54-30.33 118.89-35.7 127.19-35.7 135.49-35.7 139.99-30.7 144.49-25.7 144.49-18.4L144.49-18.4Q144.49-10.15 139.12-4.78 133.74 0.6 125.74 0.6ZM136.94-17.05L136.94-17.05Q136.94-21.2 135.97-24.3 134.99-27.4 132.39-29.48 129.79-31.55 125.69-31.55L125.69-31.55Q123.84-31.55 121.94-31.13 120.04-30.7 119.19-30.2L119.19-30.2Q117.69-28.65 116.72-25.45 115.74-22.25 115.74-18.73 115.74-15.2 116.37-12.68 116.99-10.15 118.32-8.03 119.64-5.9 121.99-4.67 124.34-3.45 127.67-3.45 130.99-3.45 133.49-4.85L133.49-4.85Q136.94-8.15 136.94-17.05Z"
                                                                        fill="#636365"
                                                                        data-fill-palette-color="primary"
                                                                      ></path>
                                                                      <path
                                                                        d="M153.99-34.9L153.99-34.9 162.54-35Q168.44-35 171.54-33.4 174.64-31.8 174.64-27.8L174.64-27.8Q174.64-25.1 173.27-23.15 171.89-21.2 169.84-20.2L169.84-20.2Q172.29-19.6 174.49-17.75L174.49-17.75Q177.14-15.55 177.14-11.43 177.14-7.3 175.09-4.75 173.04-2.2 169.87-1.05 166.69 0.1 161.89 0.1L161.89 0.1Q154.09-0.1 153.89-0.1L153.89-0.1 149.89 0 149.89-1.15Q150.89-3.6 150.89-8.15L150.89-8.15 150.89-26.4Q150.89-31.3 150.04-33.9L150.04-33.9 150.04-35Q151.44-34.9 153.99-34.9ZM159.74-17.85L159.74-17.85 157.99-17.85Q157.99-5.9 158.14-3.5L158.14-3.5Q160.14-3.2 161.19-3.2L161.19-3.2Q164.99-3.2 167.32-5.25 169.64-7.3 169.64-10.75L169.64-10.75Q169.64-17.85 159.74-17.85ZM167.79-26.4Q167.79-29.4 166.29-30.65 164.79-31.9 162.06-31.9 159.34-31.9 158.04-31.75L158.04-31.75Q157.99-31.05 157.99-20.9L157.99-20.9 161.39-20.9Q167.79-20.9 167.79-26.4L167.79-26.4ZM214.29-24.55L214.29-24.55 214.29-15.6Q214.29-6.5 210.96-2.98 207.64 0.55 199.79 0.55 191.94 0.55 188.44-2.88 184.94-6.3 184.94-13.85L184.94-13.85 184.94-23.75Q184.94-31.2 184.14-33.9L184.14-33.9 184.14-35 192.74-35 192.74-33.9Q192.04-29.4 192.04-22.25L192.04-22.25 192.04-16.1Q192.04-11.05 192.66-8.9 193.29-6.75 194.19-5.8L194.19-5.8Q196.24-3.55 200.46-3.55 204.69-3.55 206.74-4.85L206.74-4.85Q208.04-6.8 208.39-10.2 208.74-13.6 208.74-21.73 208.74-29.85 207.94-33.9L207.94-33.9 207.94-35 215.09-35 215.09-33.95Q214.74-32.8 214.51-29.58 214.29-26.35 214.29-24.55ZM228.24-34.9L228.24-34.9 238.19-35.05Q248.09-35.05 252.89-31.03 257.69-27 257.69-18.65L257.69-18.65Q257.69-13.5 255.83-9.4 253.99-5.3 250.44-2.95L250.44-2.95Q246.04 0 238.39 0L238.39 0 237.44 0 228.24-0.05 224.34-0.05 224.34-1.15Q225.19-4.35 225.19-11.05L225.19-11.05 225.19-23.95Q225.19-30.7 224.34-33.9L224.34-33.9 224.34-35Q226.54-34.9 228.24-34.9ZM232.29-19.65L232.29-19.65 232.29-16.75Q232.29-6 232.44-4.35L232.44-4.35Q235.69-4.1 238.14-4.1L238.14-4.1Q244.39-4.1 246.79-5.5L246.79-5.5Q250.14-9 250.14-17.85L250.14-17.85Q250.14-25.2 247.16-28.28 244.19-31.35 237.24-31.35L237.24-31.35Q237.04-31.35 232.39-31.3L232.39-31.3Q232.29-28.9 232.29-19.65ZM269.43-34.9L269.43-34.9 279.38-35.05Q289.28-35.05 294.08-31.03 298.88-27 298.88-18.65L298.88-18.65Q298.88-13.5 297.03-9.4 295.18-5.3 291.63-2.95L291.63-2.95Q287.23 0 279.58 0L279.58 0 278.63 0 269.43-0.05 265.53-0.05 265.53-1.15Q266.38-4.35 266.38-11.05L266.38-11.05 266.38-23.95Q266.38-30.7 265.53-33.9L265.53-33.9 265.53-35Q267.73-34.9 269.43-34.9ZM273.48-19.65L273.48-19.65 273.48-16.75Q273.48-6 273.63-4.35L273.63-4.35Q276.88-4.1 279.33-4.1L279.33-4.1Q285.58-4.1 287.98-5.5L287.98-5.5Q291.33-9 291.33-17.85L291.33-17.85Q291.33-25.2 288.36-28.28 285.38-31.35 278.43-31.35L278.43-31.35Q278.23-31.35 273.58-31.3L273.58-31.3Q273.48-28.9 273.48-19.65ZM319.08-14.6L319.08-11Q319.08-9.2 319.31-5.73 319.53-2.25 319.83-1.1L319.83-1.1 319.83 0 311.73 0 311.73-1.1Q312.48-3.95 312.48-9.7L312.48-9.7 312.48-14.7 307.58-23.8Q305.63-27.35 303.58-30.4 301.53-33.45 300.58-33.9L300.58-33.9 300.58-35 309.83-35 309.83-33.9Q309.83-31.9 311.68-28.15 313.53-24.4 316.53-19L316.53-19Q320.73-27.5 321.68-30.03 322.63-32.55 322.63-33.9L322.63-33.9 322.63-35 329.88-35 329.88-33.9Q328.08-32.65 325.48-27.8L325.48-27.8Q324.03-25.1 319.08-14.6L319.08-14.6Z"
                                                                        fill="#31ad5d"
                                                                        data-fill-palette-color="secondary"
                                                                      ></path>
                                                                    </g>
                                                                  </svg>
                                                                </g>
                                                              </svg>
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </g>
                                                    <g
                                                      transform="matrix(1,0,0,1,415.89275231423767,0)"
                                                    >
                                                      <svg
                                                        viewBox="0 0 73.90542196958091 73.90542196958091"
                                                        height="73.90542196958091"
                                                        width="73.90542196958091"
                                                      >
                                                        <g><svg></svg></g>
                                                        <g id="icon-0">
                                                          <svg
                                                            viewBox="0 0 73.90542196958091 73.90542196958091"
                                                            height="73.90542196958091"
                                                            width="73.90542196958091"
                                                          >
                                                            <g>
                                                              <path
                                                                d="M0 36.953c0-20.408 16.544-36.953 36.953-36.953 20.408 0 36.953 16.544 36.952 36.953 0 20.408-16.544 36.953-36.952 36.952-20.408 0-36.953-16.544-36.953-36.952zM36.953 70.014c18.259 0 33.062-14.802 33.061-33.061 0-18.259-14.802-33.062-33.061-33.062-18.259 0-33.062 14.802-33.062 33.062 0 18.259 14.802 33.062 33.062 33.061z"
                                                                data-fill-palette-color="accent"
                                                                fill="#31ad5d"
                                                                stroke="transparent"
                                                              ></path>
                                                            </g>
                                                            <g
                                                              transform="matrix(1,0,0,1,20.357309570296525,20.05615453211868)"
                                                            >
                                                              <svg
                                                                viewBox="0 0 33.19080282898786 33.793112905343555"
                                                                height="33.793112905343555"
                                                                width="33.19080282898786"
                                                              >
                                                                <g>
                                                                  <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                    version="1.1"
                                                                    x="0"
                                                                    y="0"
                                                                    viewBox="6.449414157832516 1.9924620716839518 498.9530876971126 508.007537928316"
                                                                    enable-background="new 0 0 512 512"
                                                                    xml:space="preserve"
                                                                    height="33.793112905343555"
                                                                    width="33.19080282898786"
                                                                    class="icon-g$-0"
                                                                    data-fill-palette-color="accent"
                                                                    id="g$-0"
                                                                  >
                                                                    <g
                                                                      fill="#31ad5d"
                                                                      data-fill-palette-color="accent"
                                                                    >
                                                                      <g
                                                                        fill="#31ad5d"
                                                                        data-fill-palette-color="accent"
                                                                      >
                                                                        <g
                                                                          fill="#31ad5d"
                                                                          data-fill-palette-color="accent"
                                                                        >
                                                                          <g
                                                                            fill="#31ad5d"
                                                                            data-fill-palette-color="accent"
                                                                          >
                                                                            <g
                                                                              fill="#31ad5d"
                                                                              data-fill-palette-color="accent"
                                                                            >
                                                                              <g
                                                                                fill="#31ad5d"
                                                                                data-fill-palette-color="accent"
                                                                              >
                                                                                <path
                                                                                  d="M232.2 180.4c-0.1 0-0.2 0-0.3 0l-9.2-0.3c-83.7-2.7-154-73-156.7-156.7l-0.3-9.2c-0.1-2.2 0.8-4.4 2.4-6 1.6-1.6 3.7-2.5 6-2.4l9.2 0.3c83.7 2.7 154 73 156.7 156.7l0.3 9.2c0.1 2.2-0.8 4.4-2.4 6C236.4 179.5 234.4 180.4 232.2 180.4zM82.1 22.2l0 0.6c2.4 75.4 65.7 138.7 141.1 141.1l0.6 0 0-0.6C221.4 88 158.1 24.7 82.7 22.2L82.1 22.2z"
                                                                                  fill="#31ad5d"
                                                                                  data-fill-palette-color="accent"
                                                                                ></path>
                                                                              </g>
                                                                            </g>
                                                                            <g
                                                                              fill="#31ad5d"
                                                                              data-fill-palette-color="accent"
                                                                            >
                                                                              <g
                                                                                fill="#31ad5d"
                                                                                data-fill-palette-color="accent"
                                                                              >
                                                                                <path
                                                                                  d="M258.3 272.1c-4.1 0-7.6-3.1-8-7.3-3.2-31.3-13.5-61.9-30.1-88.4-13.7-22.4-31.6-41.8-53.1-57.7-3.6-2.6-4.3-7.7-1.7-11.3 2.6-3.6 7.7-4.3 11.3-1.7 23.2 17.1 42.4 38 57.2 62.1 17.8 28.5 29 61.5 32.4 95.3 0.4 4.4-2.8 8.4-7.2 8.8C258.9 272.1 258.6 272.1 258.3 272.1z"
                                                                                  fill="#31ad5d"
                                                                                  data-fill-palette-color="accent"
                                                                                ></path>
                                                                              </g>
                                                                            </g>
                                                                          </g>
                                                                          <g
                                                                            fill="#31ad5d"
                                                                            data-fill-palette-color="accent"
                                                                          >
                                                                            <g
                                                                              fill="#31ad5d"
                                                                              data-fill-palette-color="accent"
                                                                            >
                                                                              <g
                                                                                fill="#31ad5d"
                                                                                data-fill-palette-color="accent"
                                                                              >
                                                                                <path
                                                                                  d="M279.8 212.1c-2.1 0-4.2-0.8-5.7-2.4-1.6-1.6-2.4-3.7-2.4-6l0.3-9.2c2.7-83.7 73-154.1 156.7-156.7l9.2-0.3c2.1-0.1 4.4 0.8 6 2.4 1.6 1.6 2.4 3.7 2.4 6L446 55c-2.7 83.7-73 154-156.7 156.7l-9.2 0.3C279.9 212.1 279.9 212.1 279.8 212.1zM429.9 53.9l-0.6 0c-75.4 2.4-138.7 65.7-141.1 141.1l0 0.6 0.6 0c75.4-2.4 138.7-65.7 141.1-141.1L429.9 53.9z"
                                                                                  fill="#31ad5d"
                                                                                  data-fill-palette-color="accent"
                                                                                ></path>
                                                                              </g>
                                                                            </g>
                                                                            <g
                                                                              fill="#31ad5d"
                                                                              data-fill-palette-color="accent"
                                                                            >
                                                                              <g
                                                                                fill="#31ad5d"
                                                                                data-fill-palette-color="accent"
                                                                              >
                                                                                <path
                                                                                  d="M259.3 272.1c-0.6 0-1.3-0.1-2-0.2-4.3-1.1-7-5.5-5.9-9.8 5.4-21.8 14.3-42.9 26.5-62.5 15.1-24.3 34.4-45.2 57.3-62.1 3.6-2.6 8.6-1.9 11.3 1.7 2.6 3.6 1.9 8.6-1.7 11.3-21.3 15.7-39.1 35-53.1 57.6-11.2 18.2-19.5 37.7-24.5 57.9C266.2 269.7 262.9 272.1 259.3 272.1z"
                                                                                  fill="#31ad5d"
                                                                                  data-fill-palette-color="accent"
                                                                                ></path>
                                                                              </g>
                                                                            </g>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                      <g
                                                                        fill="#31ad5d"
                                                                        data-fill-palette-color="accent"
                                                                      >
                                                                        <g
                                                                          fill="#31ad5d"
                                                                          data-fill-palette-color="accent"
                                                                        >
                                                                          <path
                                                                            d="M99 506.2c-2.1 0-4.3-0.8-5.8-2.5-3.1-3.2-2.9-8.3 0.3-11.4l31.5-30c19.6-18.7 45.3-28.9 72.3-28.9h137.9c22.6 0 44.1-8.5 60.6-23.9l86.2-80.4c2.3-2.2 3.6-5.1 3.7-8.3 0-3.2-1.2-6.2-3.4-8.4-4.4-4.4-11.4-4.5-16-0.3l-95.4 87.2c-1.5 1.4-3.4 2.1-5.4 2.1h-109c-15.5 0-28.2-12.6-28.2-28.2 0-15.5 12.6-28.2 28.2-28.2h44.4c8.9 0 16.2-7.3 16.2-16.2s-7.3-16.2-16.2-16.2H173.3c-23.3 0-45.4 9-62.1 25.3l-87.3 85.4c-3.2 3.1-8.3 3.1-11.4-0.1-3.1-3.2-3.1-8.3 0.1-11.4l87.3-85.4c19.7-19.3 45.8-29.9 73.4-29.9h127.4c17.8 0 32.4 14.5 32.4 32.4s-14.5 32.4-32.4 32.4h-44.4c-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12h105.9l93.1-85c11-10 27.7-9.6 38.3 0.8 5.4 5.4 8.3 12.5 8.2 20.1-0.1 7.6-3.2 14.7-8.8 19.9l-86.2 80.4c-19.5 18.2-44.9 28.2-71.6 28.2H197.3c-22.9 0-44.6 8.7-61.2 24.5l-31.5 30C103 505.5 101 506.2 99 506.2z"
                                                                            fill="#31ad5d"
                                                                            data-fill-palette-color="accent"
                                                                          ></path>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                    <g
                                                                      fill="#31ad5d"
                                                                      data-fill-palette-color="accent"
                                                                    >
                                                                      <g
                                                                        fill="#31ad5d"
                                                                        data-fill-palette-color="accent"
                                                                      >
                                                                        <g
                                                                          fill="#31ad5d"
                                                                          data-fill-palette-color="accent"
                                                                        >
                                                                          <g
                                                                            fill="#31ad5d"
                                                                            data-fill-palette-color="accent"
                                                                          >
                                                                            <g
                                                                              fill="#31ad5d"
                                                                              data-fill-palette-color="accent"
                                                                            >
                                                                              <g
                                                                                fill="#31ad5d"
                                                                                data-fill-palette-color="accent"
                                                                              >
                                                                                <path
                                                                                  d="M231.9 179.2c-0.1 0-0.2 0-0.3 0l-9.4-0.3c-85-2.7-156.4-74.1-159.1-159.1l-0.3-9.3c-0.1-2.3 0.8-4.5 2.4-6.1C66.8 2.8 69 1.9 71.3 2l9.3 0.3c85 2.7 156.4 74.1 159.1 159.1l0.3 9.3c0.1 2.3-0.8 4.5-2.4 6.1C236.1 178.4 234 179.2 231.9 179.2zM79.5 18.7l0 0.6c2.5 76.5 66.7 140.8 143.3 143.3l0.6 0 0-0.6C220.9 85.4 156.6 21.2 80.1 18.7L79.5 18.7z"
                                                                                  fill="#31ad5d"
                                                                                  data-fill-palette-color="accent"
                                                                                ></path>
                                                                              </g>
                                                                            </g>
                                                                            <g
                                                                              fill="#31ad5d"
                                                                              data-fill-palette-color="accent"
                                                                            >
                                                                              <g
                                                                                fill="#31ad5d"
                                                                                data-fill-palette-color="accent"
                                                                              >
                                                                                <path
                                                                                  d="M258.4 272.4c-4.2 0-7.7-3.1-8.1-7.4-3.2-31.8-13.8-62.8-30.5-89.7-14-22.7-32.1-42.4-53.9-58.5-3.6-2.7-4.4-7.8-1.7-11.5 2.7-3.6 7.8-4.4 11.5-1.7 23.5 17.4 43 38.6 58.1 63.1 18 29 29.4 62.4 32.9 96.7 0.5 4.5-2.8 8.5-7.3 9C258.9 272.3 258.6 272.4 258.4 272.4z"
                                                                                  fill="#31ad5d"
                                                                                  data-fill-palette-color="accent"
                                                                                ></path>
                                                                              </g>
                                                                            </g>
                                                                          </g>
                                                                          <g
                                                                            fill="#31ad5d"
                                                                            data-fill-palette-color="accent"
                                                                          >
                                                                            <g
                                                                              fill="#31ad5d"
                                                                              data-fill-palette-color="accent"
                                                                            >
                                                                              <g
                                                                                fill="#31ad5d"
                                                                                data-fill-palette-color="accent"
                                                                              >
                                                                                <path
                                                                                  d="M280.1 211.4c-2.2 0-4.3-0.9-5.8-2.4-1.6-1.6-2.5-3.8-2.4-6.1l0.3-9.3c2.7-85 74.1-156.4 159.1-159.1l9.3-0.3c2.2-0.1 4.4 0.8 6.1 2.4 1.6 1.6 2.5 3.8 2.4 6.1l-0.3 9.3c-2.7 85-74.1 156.4-159.1 159.1l-9.3 0.3C280.3 211.4 280.2 211.4 280.1 211.4zM432.5 50.8l-0.6 0c-76.5 2.5-140.8 66.7-143.3 143.3l0 0.6 0.6 0C365.7 192.3 430 128 432.5 51.5L432.5 50.8z"
                                                                                  fill="#31ad5d"
                                                                                  data-fill-palette-color="accent"
                                                                                ></path>
                                                                              </g>
                                                                            </g>
                                                                            <g
                                                                              fill="#31ad5d"
                                                                              data-fill-palette-color="accent"
                                                                            >
                                                                              <g
                                                                                fill="#31ad5d"
                                                                                data-fill-palette-color="accent"
                                                                              >
                                                                                <path
                                                                                  d="M259.4 272.4c-0.7 0-1.3-0.1-2-0.2-4.4-1.1-7.1-5.5-6-9.9 5.5-22.2 14.6-43.5 26.9-63.4 15.3-24.7 34.9-45.9 58.2-63 3.6-2.7 8.8-1.9 11.5 1.7 2.7 3.6 1.9 8.8-1.7 11.5-21.6 15.9-39.7 35.6-53.9 58.4-11.4 18.5-19.8 38.3-24.9 58.8C266.4 269.9 263 272.4 259.4 272.4z"
                                                                                  fill="#31ad5d"
                                                                                  data-fill-palette-color="accent"
                                                                                ></path>
                                                                              </g>
                                                                            </g>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                      <g
                                                                        fill="#31ad5d"
                                                                        data-fill-palette-color="accent"
                                                                      >
                                                                        <g
                                                                          fill="#31ad5d"
                                                                          data-fill-palette-color="accent"
                                                                        >
                                                                          <path
                                                                            d="M96.6 510c-2.2 0-4.3-0.9-5.9-2.5-3.1-3.3-3-8.5 0.3-11.6l32-30.5c19.9-18.9 46-29.4 73.4-29.4h140c22.9 0 44.7-8.6 61.5-24.2l87.5-81.6c2.4-2.2 3.7-5.2 3.7-8.4s-1.2-6.3-3.5-8.5c-4.5-4.4-11.6-4.6-16.3-0.3l-96.9 88.5c-1.5 1.4-3.5 2.1-5.5 2.1H256.3c-15.8 0-28.6-12.8-28.6-28.6 0-15.8 12.8-28.6 28.6-28.6h45.1c9.1 0 16.5-7.4 16.5-16.5s-7.4-16.5-16.5-16.5H172.1c-23.7 0-46.1 9.1-63 25.7l-88.7 86.7c-3.2 3.2-8.4 3.1-11.6-0.1-3.2-3.2-3.1-8.4 0.1-11.6l88.7-86.7c20-19.6 46.5-30.4 74.5-30.4h129.3c18.1 0 32.9 14.7 32.9 32.8 0 18.1-14.7 32.8-32.9 32.8h-45.1c-6.7 0-12.2 5.5-12.2 12.2s5.5 12.2 12.2 12.2h107.5l94.5-86.3c11.1-10.1 28.2-9.8 38.8 0.8 5.5 5.4 8.4 12.7 8.3 20.4-0.1 7.7-3.3 14.9-8.9 20.2l-87.5 81.6c-19.8 18.5-45.6 28.6-72.7 28.6h-140c-23.2 0-45.3 8.8-62.1 24.8l-32 30.5C100.7 509.3 98.6 510 96.6 510z"
                                                                            fill="#31ad5d"
                                                                            data-fill-palette-color="accent"
                                                                          ></path>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </svg>
                                                                </g>
                                                              </svg>
                                                            </g>
                                                          </svg>
                                                        </g>
                                                      </svg>
                                                    </g>
                                                  </svg>
                                                </g>
                                                <defs></defs>
                                              </svg>
                                              <rect
                                                width="395.52"
                                                height="59.67983147374983"
                                                fill="none"
                                                stroke="none"
                                                visibility="hidden"
                                              ></rect>
                                            </g>
                                          </svg>
                                        </g>
                                      </svg>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #161a39;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #161a39;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #31ad5d;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #31ad5d;
                        height: 100%;
                        width: 100% !important;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 35px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center"
                                    ></td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 10px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 140%;
                                      text-align: center;
                                    "
                                  >
                                    <span
                                      style="
                                        font-size: 28px;
                                        line-height: 39.2px;
                                        color: #ffffff;
                                        font-family: Lato, sans-serif;
                                      "
                                      >OTP verification
                                    </span>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #ffffff;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 40px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                      >Hello,</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                     
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                      >Your OTP for verification valid for 2
                                      hours</span
                                    ><span
                                      style="
                                        font-size: 18px;
                                        line-height: 25.2px;
                                        color: #666666;
                                      "
                                    ></span>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    font-family: 'Lato', sans-serif;
                                    font-size: 29px;
                                    font-weight: 700;
                                    line-height: 150%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 150%">${otp}</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 40px 40px 30px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        color: #888888;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><em
                                        ><span
                                          style="
                                            font-size: 16px;
                                            line-height: 22.4px;
                                          "
                                          >Please ignore this email if you did
                                          not request a password change.</span
                                        ></em
                                      ></span
                                    ><br /><span
                                      style="
                                        color: #888888;
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><em
                                        ><span
                                          style="
                                            font-size: 16px;
                                            line-height: 22.4px;
                                          "
                                          >&nbsp;</span
                                        ></em
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: #ffffff"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #31ad5d;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #31ad5d;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color: #31ad5d;width: 300px;padding: 20px 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #31ad5d;
                        height: 100%;
                        width: 100% !important;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 20px 20px 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 16px;
                                        line-height: 22.4px;
                                        color: #ecf0f1;
                                      "
                                      >Contact</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        color: #ecf0f1;
                                      "
                                      >National Institute of Technology,
                                      Silchar-788010</span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                        color: #ecf0f1;
                                      "
                                      >agrobuddy217@gmail.com</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px 0px 0px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-50"
                    style="
                      max-width: 320px;
                      min-width: 300px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px 0px 0px 20px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 90px 10px 10px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    color: #ffffff;
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 140%; font-size: 14px">
                                    <span
                                      style="
                                        font-size: 14px;
                                        line-height: 19.6px;
                                      "
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          font-size: 14px;
                                          line-height: 19.6px;
                                        "
                                        ><span
                                          style="
                                            line-height: 19.6px;
                                            font-size: 14px;
                                          "
                                          >AgroBuddy ©  All Rights
                                          Reserved</span
                                        ></span
                                      ></span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: #f9f9f9"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #1c103b;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f9f9f9;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #1c103b;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: #f9f9f9;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!--><div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      ><!--<![endif]-->
                        <table
                          style="font-family: 'Lato', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px 40px 30px 20px;
                                  font-family: 'Lato', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  style="
                                    line-height: 140%;
                                    text-align: left;
                                    word-wrap: break-word;
                                  "
                                ></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>
`;
};
