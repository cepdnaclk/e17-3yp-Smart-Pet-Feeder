let emailTemplate = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '\n' +
    '<head>\n' +
    '    <title>Smart Pet Feeder!</title>\n' +
    '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n' +
    '    <style type="text/css">\n' +
    '        @media screen {\n' +
    '            @font-face {\n' +
    '                font-family: \'Lato\';\n' +
    '                font-style: normal;\n' +
    '                font-weight: 400;\n' +
    '                src: local(\'Lato Regular\'), local(\'Lato-Regular\'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format(\'woff\');\n' +
    '            }\n' +
    '\n' +
    '            @font-face {\n' +
    '                font-family: \'Lato\';\n' +
    '                font-style: normal;\n' +
    '                font-weight: 700;\n' +
    '                src: local(\'Lato Bold\'), local(\'Lato-Bold\'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format(\'woff\');\n' +
    '            }\n' +
    '\n' +
    '            @font-face {\n' +
    '                font-family: \'Lato\';\n' +
    '                font-style: italic;\n' +
    '                font-weight: 400;\n' +
    '                src: local(\'Lato Italic\'), local(\'Lato-Italic\'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format(\'woff\');\n' +
    '            }\n' +
    '\n' +
    '            @font-face {\n' +
    '                font-family: \'Lato\';\n' +
    '                font-style: italic;\n' +
    '                font-weight: 700;\n' +
    '                src: local(\'Lato Bold Italic\'), local(\'Lato-BoldItalic\'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format(\'woff\');\n' +
    '            }\n' +
    '        }\n' +
    '\n' +
    '        /* CLIENT-SPECIFIC STYLES */\n' +
    '        body,\n' +
    '        table,\n' +
    '        td,\n' +
    '        a {\n' +
    '            -webkit-text-size-adjust: 100%;\n' +
    '            -ms-text-size-adjust: 100%;\n' +
    '        }\n' +
    '\n' +
    '        table,\n' +
    '        td {\n' +
    '            mso-table-lspace: 0pt;\n' +
    '            mso-table-rspace: 0pt;\n' +
    '        }\n' +
    '\n' +
    '        img {\n' +
    '            -ms-interpolation-mode: bicubic;\n' +
    '        }\n' +
    '\n' +
    '        /* RESET STYLES */\n' +
    '        img {\n' +
    '            border: 0;\n' +
    '            height: auto;\n' +
    '            line-height: 100%;\n' +
    '            outline: none;\n' +
    '            text-decoration: none;\n' +
    '        }\n' +
    '\n' +
    '        table {\n' +
    '            border-collapse: collapse !important;\n' +
    '        }\n' +
    '\n' +
    '        body {\n' +
    '            height: 100% !important;\n' +
    '            margin: 0 !important;\n' +
    '            padding: 0 !important;\n' +
    '            width: 100% !important;\n' +
    '        }\n' +
    '\n' +
    '        /* iOS BLUE LINKS */\n' +
    '        a[x-apple-data-detectors] {\n' +
    '            color: inherit !important;\n' +
    '            text-decoration: none !important;\n' +
    '            font-size: inherit !important;\n' +
    '            font-family: inherit !important;\n' +
    '            font-weight: inherit !important;\n' +
    '            line-height: inherit !important;\n' +
    '        }\n' +
    '\n' +
    '        /* MOBILE STYLES */\n' +
    '        @media screen and (max-width:600px) {\n' +
    '            h1 {\n' +
    '                font-size: 32px !important;\n' +
    '                line-height: 32px !important;\n' +
    '            }\n' +
    '        }\n' +
    '\n' +
    '        /* ANDROID CENTER FIX */\n' +
    '        div[style*="margin: 16px 0;"] {\n' +
    '            margin: 0 !important;\n' +
    '        }\n' +
    '    </style>\n' +
    '</head>\n' +
    '\n' +
    '<body style="background-color: #084de8; margin: 0 !important; padding: 0 !important;">\n' +
    '\n' +
    '\n' +
    '<table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
    '    <!-- LOGO -->\n' +
    '    <tr>\n' +
    '        <td bgcolor="#FFA73B" align="center" style="background-color: #810516;">\n' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">\n' +
    '                <tr>\n' +
    '                    <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>\n' +
    '                </tr>\n' +
    '            </table>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td bgcolor="#FFA73B" align="center" style="align-content: center; background-color: #810516; padding: 0px 10px 0px 10px;">\n' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">\n' +
    '                <tr>\n' +
    '                    <td bgcolor="#ffffff" align="center" valign="top" style=" background-color: #111111; padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #ffffff; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">\n' +
    '                        <h1 style="font-size: 48px; font-weight: 400; margin: 2;">Welcome!</h1> <img src="" width="125" height="120" style="display: block; border: 0px;" />\n' +
    '                        <h6 style="font-family: serif; font-size: 0.75cm "><i>"Saving one pet won\'t change the world , but for that one pet the world will change forever"</i></h6>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </table>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td bgcolor="#f4f4f4" align="center" style="align-content: center; background-color: #810516;  padding: 0px 10px 0px 10px;">\n' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">\n' +
    '                <tr>\n' +
    '                    <td bgcolor="#ffffff" align="left" style="background-color: #111111; padding: 20px 30px 40px 30px; color: #ffffff; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">\n' +
    '                        <p style="margin: 0;">Hello <%=NAME%><br><br>We\'re excited to have you get started. First, you need to confirm your account. Your OTP is given below.</p>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                <tr>\n' +

    '                    <td bgcolor="#ffffff" align="left">\n' +
    '                        <table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
    '                            <tr>\n' +
    '                                <td bgcolor="#ffffff" align="center" style="background-color: #111111; padding: 20px 30px 60px 30px;">\n' +
    '                                    <table border="0" cellspacing="0" cellpadding="0">\n' +
    '                                        <tr>\n' +
    '                                            <td align="center" style="border-radius: 3px;" bgcolor="#FFA73B">' +
    '                                                   <a   href= "<%=OTP%>"  style="background-color: #810516; font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #810516; display: inline-block;">Register</a></td>\n' +
    '                                        </tr>\n' +
    '                                    </table>\n' +
    '                                </td>\n' +
    '                            </tr>\n' +
    '                        </table>\n' +
    '                    </td>\n' +
    '                </tr> ' +
    '                <tr>\n' +
    '                    <td bgcolor="#ffffff" align="left" style="background-color: #111111; padding: 0px 30px 20px 30px; color: #ffffff; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">\n' +
    '                        <p style="margin: 0;">If you have any questions, just reply to this email—we\'re always happy to help out.</p>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                <tr>\n' +
    '                    <td bgcolor="#ffffff" align="left" style="background-color: #111111; padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #ffffff; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">\n' +
    '                        <p style="margin: 0;"><br><br>Cheers,<br>Smart Pet Feeder Team</p>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </table>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td bgcolor="#f4f4f4" align="center" style="background-color:#810516;  padding: 30px 10px 0px 10px;">\n' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">\n' +
    '                <tr>\n' +
    '                    <td bgcolor="#FFECD1" align="center" style="background-color: #f696a1; padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #ffffff; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">\n' +
    '                        <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>\n' +
    '                        <p style="margin: 0;"><a href="#" target="_blank" style="color: #2e7ec4;">We&rsquo;re here to help you out</a></p>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </table>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '        <td bgcolor="#f4f4f4" align="center" style="background-color: #111111; padding: 0px 10px 0px 10px;">\n' +
    '            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">\n' +
    '                <tr>\n' +
    '                    <td bgcolor="#f4f4f4" align="left" style="background-color:#f696a1;  padding: 0px 30px 30px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"> <br>\n' +
    '                        <p style="margin: 0;">If these emails get annoying, please feel free to <a href="#" target="_blank" style="color: #111111; font-weight: 700;">unsubscribe</a>.</p>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </table>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '</table>\n' +
    '</body>\n' +
    '\n' +
    '</html>'

module.exports = emailTemplate;