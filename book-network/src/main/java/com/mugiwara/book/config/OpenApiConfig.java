package com.mugiwara.book.config;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Madez",
                        email = "mathesh1907@gmail.com",
                        url = "https://madez-portfolio-main.vercel.app/"
                ),
                description = "OpenAPI documentation for Spring security",
                title = "OpenAPI Specification",
                version = "1.0",
                license = @License(
                        name = "Mugiwara",
                        url = "https://madez-portfolio-main.vercel.app/" // todo

                ),
                termsOfService = "Terms of service"
        ),
        servers = {
                @Server(
                        description = "local ENV",
                        url = "http://localhost:8088/api/v1"
                ),
                @Server(
                        description = "PROD ENV",
                        url = "https://madez-portfolio-main.vercel.app/" // todo
                )
        },
        security = {
                @SecurityRequirement(
                        name = "bearerAuth"
                )
        }

)
@SecurityScheme(
        name = "bearerAuth",
        description = "JWT auth description",
        scheme = "bearer",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)


public class OpenApiConfig {

}
